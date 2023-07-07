'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'

const QuickSearch = () => {
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <section className="container mx-auto p-5 text-grayPrimary dark:text-walterWhite ">
      <div className="flex justify-center items-center">
        <div className="h-[1px] w-full bg-graySecondary" />
        <h2 className="px-5 font-medium whitespace-nowrap">
          Tente pesquisar por
        </h2>
        <div className="h-[1px] w-full bg-graySecondary" />
      </div>

      <div className="flex w-full justify-between mt-5">
        <div className="flex flex-col items-center gap-1">
          <Image
            width={35}
            height={35}
            src={theme === 'dark' ? '/hotel-icon-dark.svg' : '/hotel-icon.svg'}
            alt="Hotel"
          />

          <p className="text-sm">Resorts</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image
            width={35}
            height={35}
            src={
              currentTheme === 'dark'
                ? '/hotel-icon-dark.svg'
                : '/hotel-icon.svg'
            }
            alt="Hotel"
          />

          <p className="text-sm">Chalés</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image
            width={35}
            height={35}
            src={
              currentTheme === 'dark'
                ? '/hotel-icon-dark.svg'
                : '/hotel-icon.svg'
            }
            alt="Hotel"
          />

          <p className="text-sm">Pousadas</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image
            width={35}
            height={35}
            src={
              currentTheme === 'dark'
                ? '/hotel-icon-dark.svg'
                : '/hotel-icon.svg'
            }
            alt="Hotel"
          />

          <p className="text-sm">Fazendas</p>
        </div>
      </div>
    </section>
  )
}

export default QuickSearch
