'use client'

import Button from '@/app/components/Button'
import DatePicker from '@/app/components/DatePicker'
import Input from '@/app/components/Input'
import { Trip } from '@prisma/client'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

interface TripReservationProps {
  trip: Trip
}

interface TripReservationForm {
  guests: number
  startDate: Date | null
  endDate: Date | null
}

const TripReservation = ({ trip }: TripReservationProps) => {
  const onSubmit = (data: any) => {
    console.log(data)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TripReservationForm>()

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
        })}
        error={!!errors.guests?.message}
        errorMessage={errors?.guests?.message}
        placeholder={`Número de hóspedes: ${trip.maxGuests}`}
        className="mt-2.5"
      />

      <div className="flex justify-between mt-2.5">
        <p className="font-medium text-sm text-primaryDarker">Total</p>
        <p className="font-medium text-sm text-primaryDarker">R$25000</p>
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
