'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"

const Header = () => {

  const [toggle, setToggle] = useState(false)

  const {status, data: session} = useSession()

  return (
    <div className='container mx-auto px-5 h-[93px] flex justify-between items-center'>
      <Image src="/logo.svg" width={183} height={32} alt='Full Stack Week Logo' />
      {status === 'unauthenticated' && (
        <button onClick={() => signIn()} className='text-primary text-sm font-semibold'>
          Login
        </button>
      )}
      {status === 'authenticated' && session.user && (
        <div className="relative flex items-center gap-3 border-graySecondary border rounded-full px-4 py-3">
          <AiOutlineMenu color='#717171' onClick={() => setToggle((prev) => !prev)} className='cursor-pointer' />

          <Image src={session.user.image ?? ""} width={24} height={24} alt='Profile' className='rounded-full shadow-md' />
          {toggle && (
            <div className='absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center'>
              <button className='text-primary text-sm font-semibold' onClick={() => {setToggle(false); signOut()}}>
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Header