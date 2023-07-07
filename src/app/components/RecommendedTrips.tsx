import { Trip } from '@prisma/client'
import React from 'react'
import TripItem from './TripItem'
import { prisma } from '@/lib/prisma'

const RecommendedTrips = async () => {
  async function getTrips() {
    const trips = await prisma.trip.findMany()

    return trips
  }
  const data = await getTrips()

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-graySecondary" />
        <h2 className="px-5 font-medium text-grayPrimary dark:text-walterWhite whitespace-nowrap">
          Destinos Recomendados
        </h2>
        <div className="w-full h-[1px] bg-graySecondary" />
      </div>

      <div className="flex flex-col items-center mt-5 gap-5">
        {data.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  )
}

export default RecommendedTrips
