'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCart } from '@/context/CartContext'

export default function ProdukDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params.id
  const { addToCart } = useCart()
  
  const [quantity, setQuantity] = useState(1)
  const [customKg, setCustomKg] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const allProducts = [
    { id: 1, name: 'Cabe Merah Keriting', image: '/images/Cabe Kriting Merah segar.jpg', pricePerKg: 45000 },
    { id: 2, name: 'Terong Ungu', image: 'https://images.unsplash.com/photo-1659261200833-ec8761558af7?w=400&h=400&fit=crop&q=80', pricePerKg: 12000 },
    { id: 3, name: 'Kangkung Segar', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop&q=80', pricePerKg: 5000 },
    { id: 4, name: 'Tomat Merah', image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop&q=80', pricePerKg: 18000 },
    { id: 5, name: 'Labu Kuning', image: 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=400&h=400&fit=crop&q=80', pricePerKg: 15000 },
    { id: 6, name: 'Timun Segar', image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400&h=400&fit=crop&q=80', pricePerKg: 8000 },
    { id: 7, name: 'Jagung Manis', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=400&fit=crop&q=80', pricePerKg: 12000 },
    { id: 8, name: 'Wortel Orange', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop&q=80', pricePerKg: 20000 },
    { id: 11, name: 'Anggur Hijau', image: 'https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=400&h=400&fit=crop&q=80', pricePerKg: 85000 },
    { id: 12, name: 'Jeruk Manis', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop&q=80', pricePerKg: 30000 },
  ]

  const product = allProducts.find(p => p.id === parseInt(id as string))

  if (!product) {
    return <div>Produk tidak ditemukan</div>
  }

  const calculatePrice = () => {
    const kg = customKg ? parseFloat(customKg) : quantity
    return kg * product.pricePerKg
  }

  const handleOrder = () => {
    const kg = customKg || quantity
    const total = calculatePrice()
    const message = `Halo, saya ingin memesan:\n\nProduk: ${product.name}\nJumlah: ${kg} kg\nTotal: Rp ${total.toLocaleString('id-ID')}`
    window.open(`https://wa.me/6282005479994?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleAddToCart = () => {
    try {
      setIsAdding(true)
      const kg = customKg ? parseFloat(customKg) : quantity
      
      console.log('handleAddToCart called with kg:', kg)
      
      if (isNaN(kg) || kg <= 0) {
        alert('Jumlah tidak valid!')
        setIsAdding(false)
        return
      }
      
      const cartItem = {
        id: `produk-${product.id}`,
        name: product.name,
        price: product.pricePerKg,
        quantity: kg,
        image: product.image,
        unit: 'kg'
      }
      
      console.log('Adding cart item:', cartItem)
      addToCart(cartItem)
      
      alert(`✅ ${product.name} berhasil ditambahkan ke keranjang!`)
      setIsAdding(false)
    } catch (error) {
      console.error('Error adding to cart:', error)
      alert('Terjadi kesalahan saat menambahkan ke keranjang: ' + error)
      setIsAdding(false)
    }
  }

  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              
              <div>
                <h1 className="text-4xl font-bold text-primary-dark mb-4">{product.name}</h1>
                <p className="text-3xl font-bold text-primary mb-8">
                  Rp {product.pricePerKg.toLocaleString('id-ID')} / kg
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Pilih Jumlah:</h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[1, 5, 10].map((kg) => (
                      <button
                        key={kg}
                        onClick={() => {
                          setQuantity(kg)
                          setCustomKg('')
                        }}
                        className={`py-4 rounded-xl font-bold text-lg transition ${
                          quantity === kg && !customKg
                            ? 'bg-primary text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
                        }`}
                      >
                        {kg} kg
                      </button>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Atau masukkan jumlah kg:
                    </label>
                    <input
                      type="number"
                      min="0.1"
                      step="0.1"
                      value={customKg}
                      onChange={(e) => setCustomKg(e.target.value)}
                      placeholder="Contoh: 2.5"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none text-lg"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">Jumlah:</span>
                    <span className="text-xl font-bold text-gray-800">
                      {customKg || quantity} kg
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Total Harga:</span>
                    <span className="text-3xl font-bold text-primary">
                      Rp {calculatePrice().toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl text-xl font-bold transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 mb-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAdding ? (
                    <>
                      <i className="fas fa-spinner fa-spin text-2xl"></i>
                      Menambahkan...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-shopping-cart text-2xl"></i>
                      Tambah ke Keranjang
                    </>
                  )}
                </button>

                <button
                  onClick={handleOrder}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl text-xl font-bold transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                  Pesan via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
