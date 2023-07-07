'use client'

import { ThemeProvider as _ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <_ThemeProvider attribute="class">{children}</_ThemeProvider>
}

export default ThemeProvider
