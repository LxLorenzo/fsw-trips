'use client'

import Button from '@/app/components/Button'
import DatePicker from '@/app/components/DatePicker'
import Input from '@/app/components/Input'
import { differenceInDays } from 'date-fns'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

interface TripReservationProps {
  tripId: string
  tripStartDate: Date
  tripEndDate: Date
  maxGuests: number
  pricePerDay: number
}

interface TripReservationForm {
  guests: number
  startDate: Date | null
  endDate: Date | null
}

const TripReservation = ({
  tripEndDate,
  tripStartDate,
  maxGuests,
  pricePerDay,
  tripId,
}: TripReservationProps) => {
  const onSubmit = async (data: TripReservationForm) => {
    const response = await fetch('http://localhost:3000/api/trips/check', {
      method: 'POST',
      body: Buffer.from(
        JSON.stringify({
          startDate: data.startDate,
          endDate: data.endDate,
          tripId,
        }),
      ),
    })

    const res = await response.json()
    if (res?.error?.code === 'TRIP_ALREADY_RESERVED') {
      setError('startDate', {
        type: 'manual',
        message: 'Esta data já está reservada.',
      })

      return setError('endDate', {
        type: 'manual',
        message: 'Esta data já está reservada.',
      })
    }

    if (res?.error?.code === 'INVALID_START_DATE') {
      setError('startDate', {
        type: 'manual',
        message: 'Data inválida.',
      })
    }

    if (res?.error?.code === 'INVALID_END_DATE') {
      return setError('endDate', {
        type: 'manual',
        message: 'Data inválida.',
      })
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setError,
  } = useForm<TripReservationForm>()

  const startDate = watch('startDate')
  const endDate = watch('endDate')

  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-3">
        <Controller
          name="startDate"
          rules={{
            required: {
              value: true,
              message: 'Data inicial é obrigatória.',
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.startDate}
              errorMessage={errors?.startDate?.message}
              placeholderText="Data de Início"
              selected={field.value}
              onChange={field.onChange}
              className="w-full"
              minDate={tripStartDate}
              maxDate={tripEndDate}
            />
          )}
        />

        <Controller
          name="endDate"
          rules={{
            required: {
              value: true,
              message: 'Data final é obrigatória.',
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.endDate}
              errorMessage={errors?.endDate?.message}
              placeholderText="Data Final"
              selected={field.value}
              onChange={field.onChange}
              className="w-full"
              maxDate={tripEndDate}
              minDate={startDate ?? tripStartDate}
            />
          )}
        />
      </div>

      <Input
        {...register('guests', {
          required: {
            value: true,
            message: 'Número de hóspedes é obrigatória.',
          },
          max: {
            value: maxGuests,
            message: `Número de hóspedes não pode ser maior que ${maxGuests}.`,
          },
        })}
        error={!!errors.guests?.message}
        errorMessage={errors?.guests?.message}
        placeholder={`Número de hóspedes: ${maxGuests}`}
        className="mt-2.5"
        onKeyPress={(event) => {
          const keyCode = event.keyCode || event.which
          const keyValue = String.fromCharCode(keyCode)
          const isValid = /^\d+$/.test(keyValue)
          if (!isValid) {
            event.preventDefault()
          }
        }}
      />

      <div className="flex justify-between mt-2.5">
        <p className="font-medium text-sm text-primaryDarker">
          Total
          {startDate && endDate
            ? ` (${differenceInDays(endDate, startDate)} noites)`
            : ''}
        </p>
        <p className="font-medium text-sm text-primaryDarker">
          {startDate && endDate
            ? `R$${differenceInDays(endDate, startDate) * pricePerDay}`
            : 'R$0'}
        </p>
      </div>

      <div className="pb-10 border-b border-b-graySecondary w-full">
        <Button
          onClick={() => handleSubmit(onSubmit)()}
          className="mt-3 w-full"
        >
          Reservar agora
        </Button>
      </div>
    </div>
  )
}

export default TripReservation
