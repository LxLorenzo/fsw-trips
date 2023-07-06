import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col p-5 bg-walterWhite items-center justify-center">
      <Image src="/logo.svg" alt="Fsw Logo" width={133} height={23} />
      <p className="text-sm font-medium mt-1 text-primaryDarker">
        Todos os direitos reservados.
      </p>
    </div>
  )
}

export default Footer
