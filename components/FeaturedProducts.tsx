~'use client'

import { useState } from 'react'

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('Semua')
  
  const products = [
    { name: 'Cabe Merah Keriting', image: '/images/Cabe Kriting Merah segar.jpg', price: 45000, oldPrice: 53000, unit: 'Per Kg', sale: '-15%' },
    { name: 'Terong Ungu', image: 'https://images.unsplash.com/photo-1659261200833-ec8761558af7?w=400&h=400&fit=crop&q=80', price: 12000, oldPrice: 15000, unit: 'Per Kg', sale: '-20%' },
    { name: 'Anggur Hijau', image: 'https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=400&h=400&fit=crop&q=80', price: 85000, unit: 'Per Kg' },
    { name: 'Kangkung Segar', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop&q=80', price: 5000, unit: 'Per Ikat' },
    { name: 'Tomat Merah', image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop&q=80', price: 18000, unit: 'Per Kg' },
  ]

  return (
    <section id="produk" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-primary-dark mb-4 md:mb-0">
            Produk Unggulan
          </h2>
          <div className="flex gap-3 flex-wrap justify-center">
            {['Semua', 'Sayuran', 'Buah-buahan', 'Bibit'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg border-2 transition ${
                  activeTab === tab
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-primary border-primary hover:bg-primary hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              onClick={() => window.location.href = `/produk/${idx + 1}`}
              className="bg-white rounded-2xl p-6 relative hover:shadow-xl transition transform hover:-translate-y-2 cursor-pointer"
            >
              {product.sale && (
                <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.sale}
                </span>
              )}
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-1">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{product.unit}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xl font-bold text-primary">
                    Rp {product.price.toLocaleString('id-ID')}
                  </p>
                  {product.oldPrice && (
                    <p className="text-sm text-gray-400 line-through">
                      Rp {product.oldPrice.toLocaleString('id-ID')}
                    </p>
                  )}
                </div>
                <button className="bg-primary hover:bg-primary-dark text-white w-10 h-10 rounded-full transition transform hover:scale-110">
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
