'use client'

import { CartProvider } from '@/context/CartContext'
import BackgroundMusic from '@/components/BackgroundMusic'
import { ReactNode } from 'react'

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <BackgroundMusic />
    </CartProvider>
  )
}
