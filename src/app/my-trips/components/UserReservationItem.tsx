import React from 'react'
import { Prisma } from '@prisma/client'
import Button from '@/app/components/Button'
import ReactCountryFlag from 'react-country-flag'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface UserReservationItemProps {
  reservation: Prisma.TripReservationGetPayload<{
    include: { trip: true }
  }>
  fetchReservations: () => void
}

const UserReservationItem = ({
  reservation,
  fetchReservations,
}: UserReservationItemProps) => {
  const { trip } = reservation

  const handleCancelClick = async () => {
    const res = await fetch(
      `http://localhost:3000/api/trips/reservation/${reservation.id}`,
      {
        method: 'DELETE',
      },
    )

    if (!res.ok) return toast.error('Ocorreu um erro ao cancelar a reserva!')

    toast.success('Reserva cancelada com sucesso!', {
      position: 'bottom-center',
    })

    fetchReservations()
  }
  return (
    <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg">
      <div className="flex items-center gap-3 pb-5 border-b border-graySecondary border-solid">
        <div className="relative h-[106px] w-[124px]">
          <Image
            src={trip.coverImage}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
            alt={trip.name}
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl text-primaryDarker dark:text-walterWhite font-semibold">
            {trip.name}
          </h2>
          <div className="flex items-center gap-1">
            <ReactCountryFlag countryCode={trip.countryCode} svg />
            <p className="text-xs text-grayPrimary underline">
              {trip.location}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-5 text-primaryDarker dark:text-walterWhite">
        <h3 className="text-sm font-medium">Data</h3>
        <div className="flex items-center gap-1">
          <p className="text-sm">
            {format(new Date(reservation.startDate), "dd 'de' MMMM", {
              locale: ptBR,
            })}
          </p>
          {' - '}
          <p className="text-sm">
            {format(new Date(reservation.endDate), "dd 'de' MMMM", {
              locale: ptBR,
            })}
          </p>
        </div>

        <h3 className="mt-5 text-sm font-medium">Hóspedes</h3>
        <p className="text-sm pb-5">{reservation.guests} hóspedes</p>

        <h3 className="font-semibold text-primaryDarker dark:text-walterWhite mt-3 pt-5 border-t border-solid border-graySecondary">
          Informações sobre o preço
        </h3>

        <div className="flex justify-between mt-1">
          <p className="text-primaryDarker dark:text-walterWhite text-sm mt-2">
            Total:
          </p>
          <p className="font-medium text-sm">
            R${Number(reservation.totalPaid)}
          </p>
        </div>

        <Button variant="cancel" className="mt-5" onClick={handleCancelClick}>
          Cancelar
        </Button>
      </div>
    </div>
  )
}

export default UserReservationItem
