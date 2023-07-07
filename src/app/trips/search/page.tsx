'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Trip } from '@prisma/client'
import TripItem from '@/app/components/TripItem'

const Trips = async () => {
  const searchParams = useSearchParams()

  const [trips, setTrips] = useState<Trip[]>([])

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch(
        `http://localhost:3000/api/trips/search?search=${
          searchParams.get('search') ?? ''
        }&startDate=${searchParams.get('startDate')}&budget=${searchParams.get(
          'budget',
        )}`,
      )
      const data = await response.json()

      setTrips(data)
    }

    fetchTrips()
  }, [searchParams])

  return (
    <div>
      <div className="container mx-auto flex flex-col items-center p-5">
        <h1 className="text-primaryDarker dark:text-walterWhite font-semibold text-xl">
          Hospedagens Encontradas
        </h1>
        <h2 className="text-grayPrimary dark:text-graySecondary font-medium mb-5">
          {trips.length > 0
            ? 'Listamos os melhores locais para você!'
            : 'Não encontramos nada nos seus parâmetros!'}
        </h2>

        <div className="flex flex-col gap-5">
          {trips.map((trip) => (
            <TripItem key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trips
