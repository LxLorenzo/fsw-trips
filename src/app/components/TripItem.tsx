'use client'

import { Trip } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import Button from './Button'
import { useRouter } from 'next/navigation'

interface TripItemProps {
  trip: Trip
}

const TripItem = ({ trip }: TripItemProps) => {
  const router = useRouter()

  const handleItemClick = () => {
    router.push(`/trips/${trip.id}`)
  }

  return (
    <div className="flex flex-col border border-graySecondary p-5 rounded-xl shadow-md">
      <div className="relative h-[280px] w-[280px]">
        <Image
          src={trip.coverImage}
          className="rounded-lg shadow-md"
          style={{ objectFit: 'cover' }}
          fill
          alt={trip.name}
        />
      </div>

      <h3 className="text-primaryDarker dark:text-walterWhite font-medium text-sm mt-2">
        {trip.name}
      </h3>
      <div className="flex items-center gap-1 my-1">
        <ReactCountryFlag countryCode={trip.countryCode} svg />
        <p className="text-xs text-grayPrimary dark:text-graySecondary">
          {trip.location}
        </p>
      </div>

      <p className="text-xs text-grayPrimary dark:text-graySecondary border-b border-b-graySecondary pb-3">
        <span className="text-primary font-medium">
          R${trip.pricePerDay.toString()}
        </span>{' '}
        por noite
      </p>
      <Button className="w-full mt-4" onClick={handleItemClick}>
        Ver mais
      </Button>
    </div>
  )
}

export default TripItem
