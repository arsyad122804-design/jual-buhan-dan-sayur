'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BibitPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const bibits = [
    { id: 1, name: 'Bibit Cabe Rawit', category: 'sayuran', image: 'https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=400&h=400&fit=crop&q=80', price: 8000, deskripsi: 'Bibit cabe rawit unggul, siap tanam' },
    { id: 2, name: 'Bibit Terong Ungu', category: 'sayuran', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400&h=400&fit=crop&q=80', price: 6000, deskripsi: 'Bibit terong berkualitas tinggi' },
    { id: 3, name: 'Bibit Tomat', category: 'sayuran', image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&h=400&fit=crop&q=80', price: 7000, deskripsi: 'Bibit tomat merah produktif' },
    { id: 4, name: 'Bibit Kangkung', category: 'sayuran', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop&q=80', price: 5000, deskripsi: 'Bibit kangkung cepat panen' },
    { id: 5, name: 'Bibit Bayam', category: 'sayuran', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop&q=80', price: 5000, deskripsi: 'Bibit bayam hijau segar' },
    { id: 6, name: 'Bibit Sawi', category: 'sayuran', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop&q=80', price: 5500, deskripsi: 'Bibit sawi hijau berkualitas' },
    { id: 7, name: 'Bibit Anggur', category: 'buah', image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=400&fit=crop&q=80', price: 25000, deskripsi: 'Bibit anggur import unggul' },
    { id: 8, name: 'Bibit Mangga', category: 'buah', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop&q=80', price: 35000, deskripsi: 'Bibit mangga harum manis' },
    { id: 9, name: 'Bibit Jeruk', category: 'buah', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop&q=80', price: 30000, deskripsi: 'Bibit jeruk manis produktif' },
    { id: 10, name: 'Bibit Pisang', category: 'buah', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop&q=80', price: 20000, deskripsi: 'Bibit pisang cavendish' },
    { id: 11, name: 'Bibit Pepaya', category: 'buah', image: 'https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=400&h=400&fit=crop&q=80', price: 15000, deskripsi: 'Bibit pepaya california' },
    { id: 12, name: 'Bibit Jambu', category: 'buah', image: 'https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=400&h=400&fit=crop&q=80', price: 28000, deskripsi: 'Bibit jambu air merah' },
  ]

  const filteredBibits = activeCategory === 'all' 
    ? bibits 
    : bibits.filter(b => b.category === activeCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary-dark mb-4 text-center">
            Bibit Tanaman Berkualitas
          </h1>
          <p className="text-center text-gray-600 text-lg mb-12">
            Mulai kebun Anda dengan bibit unggul dari kami
          </p>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeCategory === 'all'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
              }`}
            >
              Semua Bibit
            </button>
            <button
              onClick={() => setActiveCategory('sayuran')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeCategory === 'sayuran'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
              }`}
            >
              Bibit Sayuran
            </button>
            <button
              onClick={() => setActiveCategory('buah')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeCategory === 'buah'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
              }`}
            >
              Bibit Buah-buahan
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBibits.map((bibit) => (
              <div
                key={bibit.id}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={bibit.image} 
                    alt={bibit.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-2">{bibit.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{bibit.deskripsi}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-primary">
                    Rp {bibit.price.toLocaleString('id-ID')}
                  </p>
                  <button className="bg-primary hover:bg-primary-dark text-white w-10 h-10 rounded-full transition transform hover:scale-110">
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
