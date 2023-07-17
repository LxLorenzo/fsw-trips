'use client'

import React, { Suspense, useEffect, useState } from 'react'
import Button from '@/app/components/Button'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Prisma } from '@prisma/client'
import Link from 'next/link'
import Loading from '../loading'

const MyTrips = () => {
  const [reservations, setReservations] = useState<
    Prisma.TripReservationGetPayload<{
      include: { trip: true }
    }>[]
  >([])

  const { status, data } = useSession()

  const router = useRouter()

  const fetchReservations = async () => {
    const response = await fetch(
      `/api/user/${(data?.user as any)?.id}/reservations`,
    )

    const json = await response.json()

    setReservations(json)
    setLoading(false)
  }

  useEffect(() => {
    if (status === 'unauthenticated') {
      return router.push('/')
    }

    fetchReservations()
  }, [status])

  const [loading, setLoading] = useState(true)

  const LazyReservationItem = React.lazy(
    () => import('./components/UserReservationItem'),
  )

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-xl text-primaryDarker dark:text-walterWhite font-semibold lg:mb-5">
        Minhas Viagens
      </h1>
      <Suspense fallback={<></>}>
        {loading ? (
          <Loading />
        ) : reservations.length > 0 ? (
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-14">
            {reservations?.map((reservation) => (
              <LazyReservationItem
                key={reservation.id}
                fetchReservations={fetchReservations}
                reservation={reservation}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col lg:max-w-[500px]">
            <p className="mt-2 font-medium text-primaryDarker dark:text-walterWhite">
              Você ainda não tem nenhuma reserva!
            </p>

            <Link href="/">
              <Button className="w-full mt-2 lg:mt-5">Fazer reserva</Button>
            </Link>
          </div>
        )}
      </Suspense>
    </div>
  )
}

export default MyTrips
