import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col p-5 mt-10 bg-walterWhite dark:bg-gray-950 items-center justify-center dark:border-t-walterWhite dark:border-t">
      <Image src="/logo.svg" alt="Fsw Logo" width={133} height={23} />
      <p className="text-sm font-medium mt-1 text-primaryDarker dark:text-walterWhite">
        Todos os direitos reservados.
      </p>
    </div>
  )
}

export default Footer
