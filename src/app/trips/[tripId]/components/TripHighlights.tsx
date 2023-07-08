import Image from 'next/image'
import React from 'react'

interface TripHighlightsProps {
  highlights: string[]
}
const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  return (
    <div className="flex flex-col px-5">
      <h2 className="text-primaryDarker dark:text-walterWhite font-semibold mb-2">
        Destaques
      </h2>
      <div className="flex flex-wrap gap-y-3">
        {highlights.map((highlight, _index) => (
          <div key={highlight} className="flex items-center gap-2 w-1/2">
            <Image src="/check.svg" alt="Check" width={15} height={15} />

            <p className="text-grayPrimary dark:text-graySecondary text-xs">
              {highlight}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TripHighlights
