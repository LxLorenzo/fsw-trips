import Button from '@/app/components/Button'
import Image from 'next/image'
import React from 'react'

interface TripLocationProps {
  location: string
  locationDescription: string
}
const TripLocation = ({ location, locationDescription }: TripLocationProps) => {
  return (
    <div className="flex flex-col p-5">
      <h1 className="text-primaryDarker font-semibold mb-5">Localização</h1>
      <div className="relative h-[280px] w-full">
        <Image src="/Map.svg" alt="Map" fill style={{ objectFit: 'cover' }} />
      </div>

      <h3 className="text-sm font-semibold text-primaryDarker mt-5">
        {location}
      </h3>
      <p className="text-xs text-primaryDarker mt-1 leading-5">
        {locationDescription}
      </p>

      <Button variant="outlined" className="w-full mt-5">
        Ver no Google Maps
      </Button>
    </div>
  )
}

export default TripLocation
