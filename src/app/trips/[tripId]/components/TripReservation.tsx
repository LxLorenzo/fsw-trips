'use client'

import Button from '@/app/components/Button'
import DatePicker from '@/app/components/DatePicker'
import Input from '@/app/components/Input'
import { Trip } from '@prisma/client'
import React from 'react'

interface TripReservationProps {
  trip: Trip
}

const TripReservation = ({ trip }: TripReservationProps) => {
  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-3">
        <DatePicker
          placeholderText="Data de Início"
          onChange={() => {}}
          className="w-full"
        />
        <DatePicker
          placeholderText="Data Final"
          onChange={() => {}}
          className="w-full"
        />
      </div>

      <Input
        placeholder={`Número de hóspedes: ${trip.maxGuests}`}
        onChange={() => {}}
        className="mt-2.5"
      />

      <div className="flex justify-between mt-2.5">
        <p className="font-medium text-sm text-primaryDarker">Total</p>
        <p className="font-medium text-sm text-primaryDarker">R$25000</p>
      </div>

      <div className="pb-10 border-b border-b-graySecondary w-full">
        <Button className="mt-3 w-full">Reservar agora</Button>
      </div>
    </div>
  )
}

export default TripReservation
