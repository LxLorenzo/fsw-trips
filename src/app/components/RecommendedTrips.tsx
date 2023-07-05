import { Trip } from '@prisma/client'
import React from 'react'
import TripItem from './TripItem'

const RecommendedTrips = async () => {

  const data = await fetch('http://localhost:3000/trips').then((res) => res.json())

  return (
    <section className='container mx-auto p-5'>
      <div className="flex items-center">
        <div className='w-full h-[1px] bg-graySecondary' />
        <h2 className="text-grayPrimary font-medium px-5 whitespace-nowrap">Destinos Recomendados</h2>
        <div className='w-full h-[1px] bg-graySecondary' />
      </div>

      <div className="flex flex-col items-center">
        {data.map((trip: Trip) => {
          <TripItem key={trip.id} trip={trip} />
        })}
      </div>
    </section>
  )
}

export default RecommendedTrips