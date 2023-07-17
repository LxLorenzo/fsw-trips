import './globals.css'
import React from 'react'
import { Poppins } from 'next/font/google'
import { NextAuthProvider } from '@/providers/auth'
import Header from './components/Header'
import Footer from './components/Footer'
import ToastProvider from '@/providers/toast'
import ThemeProvider from '@/providers/theme'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'FSW Trips',
  description: 'Sistema de Reserva de Viagens!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <NextAuthProvider>
          <ToastProvider>
            <ThemeProvider>
              <div className="flex flex-col h-screen">
                <div className="h-[94px]">
                  <Header />
                </div>
                <div className="flex-1">{children}</div>
                <Footer />
              </div>
            </ThemeProvider>
          </ToastProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
