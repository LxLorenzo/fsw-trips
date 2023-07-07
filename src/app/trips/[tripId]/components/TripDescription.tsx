import React from 'react'

interface TripDescriptionProps {
  description: string
}
const TripDescription = ({ description }: TripDescriptionProps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="text-primaryDarker dark:text-walterWhite text-md font-semibold">
        Sobre a Viagem
      </h2>
      <p className="text-primaryDarker dark:text-graySecondary text-sm mt-1 leading-5">
        {description}
      </p>
    </div>
  )
}

export default TripDescription
