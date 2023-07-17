'use client'

import React from 'react'
import Input from './Input'
import DatePicker from './DatePicker'
import CurrencyInput from './CurrencyInput'
import Button from './Button'
import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

interface TripSearchForm {
  search: string
  startDate: Date | null
  budget: number
}

const TripSearch = () => {
  const router = useRouter()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TripSearchForm>()

  const onSubmit = (data: TripSearchForm) => {
    router.push(
      `/trips/search?search=${data.search}&startDate=${data.startDate?.toISOString}&budget=${data.budget}`,
    )
  }

  return (
    <section className="container mx-auto p-5 bg-search-background dark:bg-search-background-dark bg-cover bg-center bg-no-repeat dark:text-walterWhite text-primaryDarker lg:py-28">
      <h1 className="font-semibold text-2xl text-center lg:text-3xl">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5 lg:flex-row lg:max-w-[948px] lg:mx-auto lg:p-4 lg:bg-primary lg:mt-12 lg:bg-opacity-20 lg:rounded-lg">
        <Input
          placeholder="Onde você quer ir?"
          error={!!errors.search}
          errorMessage={errors.search?.message}
          {...register('search', {
            required: {
              value: true,
              message: 'Campo obrigatório.',
            },
          })}
        />

        <div className="flex gap-4 lg:w-full">
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                placeholderText="Data Inicial"
                selected={field.value}
                onChange={field.onChange}
                className="w-full"
                minDate={new Date()}
              />
            )}
          />

          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <CurrencyInput
                placeholder="Orçamento"
                allowDecimals={false}
                onValueChange={field.onChange as any}
                value={field.value}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>

        <Button onClick={handleSubmit(onSubmit)} className="w-1/2 lg:h-fit">
          Buscar
        </Button>
      </div>
    </section>
  )
}

export default TripSearch
