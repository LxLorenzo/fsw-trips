import Image from 'next/image'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import Button from '@/app/components/Button'

const MyTrips = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-xl text-primaryDarker font-semibold">
        Minhas Viagens
      </h1>
      <div className="border border-graySecondary p-8 rounded-xl shadow-md flex flex-col mt-5">
        <div className="flex items-center gap-5 pb-5 border-b border-b-graySecondary">
          <Image src={'/hotel-icon.svg'} alt="Hotel" width={124} height={106} />
          <div className="flex flex-col">
            <h2 className="text-primaryDarker font-semibold text-md">Viagem</h2>
            <div className="flex items-center gap-1">
              <ReactCountryFlag countryCode="BR" svg />
              <p className="text-xs text-grayPrimary underline">
                Rio de Janeiro, Brasil
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-b border-b-graySecondary pb-5">
          <h3 className="text-primaryDarker font-semibold text-sm my-5">
            Sobre a viagem
          </h3>
          <div className="flex flex-col gap-1">
            <p className="text-primaryDarker text-sm">Data</p>
            <p className="text-primaryDarker text-sm">19-27 de julho</p>
          </div>
          <div className="flex flex-col gap-1 mt-5">
            <p className="text-primaryDarker text-sm">Hóspedes</p>
            <p className="text-primaryDarker text-sm">8 hóspedes</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-primaryDarker font-semibold text-sm my-5">
            Informações do pagamento
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-primaryDarker text-sm">Total</p>
            <p className="text-primaryDarker text-sm font-semibold">R$3390</p>
          </div>
          <Button variant="cancel" className="mt-5">
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MyTrips
