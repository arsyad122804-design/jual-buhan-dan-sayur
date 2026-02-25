'use client'

import { useCart } from '@/context/CartContext'

export default function Header() {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <header className="bg-gradient-to-r from-primary-dark to-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <i className="fas fa-seedling text-3xl"></i>
            <a href="/">
              <h1 className="text-2xl font-bold cursor-pointer hover:text-primary-light transition">Petani Muda</h1>
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              <li><a href="/" className="hover:text-primary-light transition">Home</a></li>
              <li><a href="/belanja" className="hover:text-primary-light transition">Produk</a></li>
              <li><a href="/bibit" className="hover:text-primary-light transition">Bibit</a></li>
              <li><a href="/smart-harga" className="hover:text-primary-light transition">Smart Harga</a></li>
              <li><a href="/tentang" className="hover:text-primary-light transition">Tentang</a></li>
              <li><a href="/kontak" className="hover:text-primary-light transition">Kontak</a></li>
            </ul>
            <a href="/keranjang" className="relative hover:text-primary-light transition">
              <i className="fas fa-shopping-cart text-2xl"></i>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
