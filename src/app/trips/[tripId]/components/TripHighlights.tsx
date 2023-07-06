import { Trip } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

interface TripHighlightsProps {
  trip: Trip
}
const TripHighlights = ({ trip }: TripHighlightsProps) => {
  return (
    <div className="flex flex-col px-5">
      <h2 className="text-primaryDarker font-semibold mb-2">Destaques</h2>
      <div className="flex flex-wrap gap-y-3">
        {trip.highlights.map((highlight) => (
          <div key={highlight} className="flex items-center gap-2 w-1/2">
            <Image src="/check.svg" alt="Check" width={15} height={15} />

            <p className="text-grayPrimary text-xs">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TripHighlights
