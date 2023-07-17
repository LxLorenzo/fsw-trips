'use client'

import Image from 'next/image'
import React from 'react'

const Error = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-5 md:mt-10">
      <h1 className="text-primary text-3xl font-semibold dark:text-walterWhite">
        Página não encontrada
      </h1>
      <Image
        src="/404.svg"
        alt="Página não encontrada"
        width={300}
        height={300}
      />
    </div>
  )
}

export default Error
