import { prisma } from '@/lib/prisma'
import React from 'react'
import TripHeader from './components/TripHeader'
import TripReservation from './components/TripReservation'

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({ where: { id: tripId } })
  return trip
}

const TripDetails = async ({ params }: { params: { tripId: string } }) => {
  const trip = await getTripDetails(params.tripId)

  if (!trip) return null

  return (
    <section className="container mx-auto">
      <TripHeader trip={trip} />
      <TripReservation trip={trip} />
    </section>
  )
}

export default TripDetails
