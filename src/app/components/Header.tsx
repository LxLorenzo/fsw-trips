'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const { status, data: session } = useSession()

  return (
    <div className="container mx-auto px-5 h-[93px] flex justify-between items-center text-primary dark:text-walterWhite">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={183}
          height={32}
          alt="Full Stack Week Logo"
        />
      </Link>
      {status === 'unauthenticated' && (
        <div className="flex gap-2">
          <button onClick={() => signIn()} className="text-sm font-semibold">
            Login
          </button>
          <ThemeSwitcher />
        </div>
      )}
      {status === 'authenticated' && session.user && (
        <div className="relative flex items-center gap-3 border-graySecondary border rounded-full px-4 py-3">
          <AiOutlineMenu
            onClick={() => setToggle((prev) => !prev)}
            className="cursor-pointer dark:text-walterWhite text-grayPrimary"
          />

          <Image
            src={session.user.image ?? ''}
            width={24}
            height={24}
            alt="Profile"
            className="rounded-full shadow-md"
          />
          {toggle && (
            <div className="absolute z-50 top-14 right-0 w-[150px] h-[150px] dark:bg-gray-900 bg-white rounded-xl shadow-md flex flex-col justify-center items-center text-center gap-1 px-3">
              <Link
                className="text-sm font-semibold "
                href="/my-trips"
                onClick={() => setToggle(false)}
              >
                Minhas viagens
              </Link>
              <ThemeSwitcher />
              <button
                className="text-sm font-semibold border-t border-t-graySecondary pt-3 w-full"
                onClick={() => {
                  setToggle(false)
                  signOut()
                }}
              >
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
