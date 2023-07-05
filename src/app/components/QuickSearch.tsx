import Image from 'next/image'
import React from 'react'

const QuickSearch = () => {
  return (
    <section className='container mx-auto p-5'>
      <div className="flex justify-center items-center">
        <div className='h-[1px] bg-graySecondary w-full' />
        <h2 className='px-5 font-medium text-grayPrimary whitespace-nowrap'>Tente pesquisar por</h2>
        <div className='h-[1px] bg-graySecondary w-full' />
      </div>

      <div className="flex w-full justify-between mt-5">
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/hotel-icon.svg" alt='Hotel' />

          <p className='text-sm text-grayPrimary'>Resorts</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/hotel-icon.svg" alt='Hotel' />

          <p className='text-sm text-grayPrimary'>Chalés</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/hotel-icon.svg" alt='Hotel' />

          <p className='text-sm text-grayPrimary'>Pousadas</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/hotel-icon.svg" alt='Hotel' />

          <p className='text-sm text-grayPrimary'>Fazendas</p>
        </div>
      </div>
    </section>
  )
}

export default QuickSearch