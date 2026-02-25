'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Page() {
  const [activeCategory, setActiveCategory] = useState('all')

  const products = [
    { id: 1, name: 'Cabe Merah Keriting', category: 'sayuran', image: '/images/Cabe Kriting Merah segar.jpg', price: 45000, unit: 'Per Kg', harvestMonth: 'Maret' },
    { id: 2, name: 'Terong Ungu', category: 'sayuran', image: 'https://images.unsplash.com/photo-1659261200833-ec8761558af7?w=400&h=400&fit=crop&q=80', price: 12000, unit: 'Per Kg', harvestMonth: 'Februari' },
    { id: 3, name: 'Kangkung Segar', category: 'sayuran', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop&q=80', price: 5000, unit: 'Per Ikat', harvestMonth: 'Januari' },
    { id: 4, name: 'Tomat Merah', category: 'sayuran', image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop&q=80', price: 18000, unit: 'Per Kg', harvestMonth: 'Maret' },
    { id: 5, name: 'Labu Kuning', category: 'sayuran', image: 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=400&h=400&fit=crop&q=80', price: 15000, unit: 'Per Kg', harvestMonth: 'Maret' },
    { id: 6, name: 'Timun Segar', category: 'sayuran', image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400&h=400&fit=crop&q=80', price: 8000, unit: 'Per Kg', harvestMonth: 'Maret' },
    { id: 7, name: 'Jagung Manis', category: 'sayuran', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=400&fit=crop&q=80', price: 12000, unit: 'Per Kg', harvestMonth: 'Maret' },
    { id: 8, name: 'Wortel Orange', category: 'sayuran', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop&q=80', price: 20000, unit: 'Per Kg', harvestMonth: 'Maret' },
    { id: 9, name: 'Bayam Hijau', category: 'sayuran', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop&q=80', price: 6000, unit: 'Per Ikat', harvestMonth: 'Februari' },
    { id: 10, name: 'Brokoli Segar', category: 'sayuran', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=400&fit=crop&q=80', price: 25000, unit: 'Per Kg', harvestMonth: 'April' },
    { id: 11, name: 'Anggur Hijau', category: 'buah', image: 'https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=400&h=400&fit=crop&q=80', price: 85000, unit: 'Per Kg', harvestMonth: 'April' },
    { id: 12, name: 'Jeruk Manis', category: 'buah', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop&q=80', price: 30000, unit: 'Per Kg', harvestMonth: 'Februari' },
    { id: 13, name: 'Mangga Harum Manis', category: 'buah', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop&q=80', price: 40000, unit: 'Per Kg', harvestMonth: 'Mei' },
    { id: 14, name: 'Pisang Cavendish', category: 'buah', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop&q=80', price: 22000, unit: 'Per Kg', harvestMonth: 'Januari' },
    { id: 15, name: 'Apel Fuji', category: 'buah', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop&q=80', price: 50000, unit: 'Per Kg', harvestMonth: 'Juni' },
    { id: 16, name: 'Pepaya California', category: 'buah', image: 'https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=400&h=400&fit=crop&q=80', price: 15000, unit: 'Per Kg', harvestMonth: 'Maret' },
    { id: 17, name: 'Semangka Merah', category: 'buah', image: '/images/download (12).jpg', price: 12000, unit: 'Per Kg', harvestMonth: 'April' },
    { id: 18, name: 'Melon Hijau', category: 'buah', image: 'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=400&h=400&fit=crop&q=80', price: 18000, unit: 'Per Kg', harvestMonth: 'Mei' },
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary-dark mb-8 text-center">
            Belanja Produk Kami
          </h1>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeCategory === 'all'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
              }`}
            >
              Semua Produk
            </button>
            <button
              onClick={() => setActiveCategory('buah')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeCategory === 'buah'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
              }`}
            >
              Buah-buahan
            </button>
            <button
              onClick={() => setActiveCategory('sayuran')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeCategory === 'sayuran'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
              }`}
            >
              Sayuran
            </button>
            <button
              onClick={() => setActiveCategory('jadwal')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeCategory === 'jadwal'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
              }`}
            >
              Jadwal Panen
            </button>
          </div>

          {activeCategory !== 'jadwal' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} onClick={() => window.location.href = `/produk/${product.id}`} className="bg-white rounded-2xl p-6 hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-110 transition duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark mb-1">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{product.unit}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-bold text-primary">Rp {product.price.toLocaleString('id-ID')}</p>
                    <button 
                      onClick={() => window.location.href = `/produk/${product.id}`}
                      className="bg-primary hover:bg-primary-dark text-white w-10 h-10 rounded-full transition transform hover:scale-110"
                    >
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'].map((month) => {
                const monthProducts = products.filter(p => p.harvestMonth === month)
                if (monthProducts.length === 0) return null
                
                return (
                  <div key={month} className="bg-white rounded-2xl p-6 shadow-lg">
                    <h2 className="text-2xl font-bold text-primary-dark mb-6 flex items-center">
                      <i className="fas fa-calendar-check mr-3 text-primary"></i>
                      Panen Bulan {month}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {monthProducts.map((product) => (
                        <div key={product.id} className="border-2 border-gray-100 rounded-xl p-4 hover:border-primary transition">
                          <div className="relative w-full h-32 mb-3 overflow-hidden rounded-lg">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          </div>
                          <h3 className="font-bold text-primary-dark mb-1">{product.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">{product.unit}</p>
                          <div className="flex justify-between items-center">
                            <p className="text-lg font-bold text-primary">Rp {product.price.toLocaleString('id-ID')}</p>
                            <button className="bg-primary hover:bg-primary-dark text-white w-8 h-8 rounded-full transition text-sm">
                              <i className="fas fa-shopping-cart"></i>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
