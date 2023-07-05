'use client'

import React from 'react'
import Input from './Input'
import DatePicker from './DatePicker'
import CurrencyInput from './CurrencyInput'
import Button from './Button'

const TripSearch = () => {
  return (
    <section className='container mx-auto text-center p-5 bg-search-background bg-cover bg-center bg-no-repeat'>
      <h1 className='font-semibold text-xl text-primaryDarker'>Encontre sua próxima <span className='text-primary'>viagem!</span></h1>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder='Onde você quer ir?' />

        <div className="flex gap-4">
          <DatePicker placeholderText='Data de Ida' onChange={() => {}} className='w-full' />
          <CurrencyInput placeholder='Orçamento' /> 
        </div>

        <Button>Buscar</Button>
      </div>
    </section>
  )
}

export default TripSearch