import Image from 'next/image'
import React from 'react'

interface TripHighlightsProps {
  highlights: string[]
}
const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  return (
    <div className="flex flex-col p-5 lg:p-0 lg:mt-12">
      <h2 className="text-primaryDarker dark:text-walterWhite font-semibold mb-2 lg:text-xl">
        Destaques
      </h2>
      <div className="flex flex-wrap gap-y-3 lg:mt-5">
        {highlights.map((highlight, index) => (
          <div
            key={highlight}
            className="flex items-center gap-2 w-1/2 lg:gap-3"
          >
            <Image src="/check.svg" alt="Check" width={15} height={15} />

            <p className="text-grayPrimary dark:text-graySecondary text-xs lg:text-base">
              {highlight}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TripHighlights
