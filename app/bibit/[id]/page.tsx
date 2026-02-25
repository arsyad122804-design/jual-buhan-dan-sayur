'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCart } from '@/context/CartContext'

export default function BibitDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params.id
  const { addToCart } = useCart()
  
  const [quantity, setQuantity] = useState(1)
  const [customQty, setCustomQty] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const allBibits = [
    { id: 1, name: 'Bibit Cabe Rawit', image: 'https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=400&h=400&fit=crop&q=80', pricePerUnit: 8000, unit: 'polybag' },
    { id: 2, name: 'Bibit Terong Ungu', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400&h=400&fit=crop&q=80', pricePerUnit: 6000, unit: 'polybag' },
    { id: 3, name: 'Bibit Tomat', image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&h=400&fit=crop&q=80', pricePerUnit: 7000, unit: 'polybag' },
    { id: 4, name: 'Bibit Anggur', image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=400&fit=crop&q=80', pricePerUnit: 25000, unit: 'polybag' },
    { id: 5, name: 'Bibit Mangga', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop&q=80', pricePerUnit: 35000, unit: 'polybag' },
  ]

  const bibit = allBibits.find(b => b.id === parseInt(id as string))

  if (!bibit) {
    return <div>Bibit tidak ditemukan</div>
  }

  const calculatePrice = () => {
    const qty = customQty ? parseInt(customQty) : quantity
    return qty * bibit.pricePerUnit
  }

  const handleOrder = () => {
    const qty = customQty || quantity
    const total = calculatePrice()
    const message = `Halo, saya ingin memesan:\n\nProduk: ${bibit.name}\nJumlah: ${qty} ${bibit.unit}\nTotal: Rp ${total.toLocaleString('id-ID')}`
    window.open(`https://wa.me/6282005479994?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleAddToCart = () => {
    try {
      setIsAdding(true)
      const qty = customQty ? parseInt(customQty) : quantity
      
      console.log('handleAddToCart called with qty:', qty)
      
      if (isNaN(qty) || qty <= 0) {
        alert('Jumlah tidak valid!')
        setIsAdding(false)
        return
      }
      
      const cartItem = {
        id: `bibit-${bibit.id}`,
        name: bibit.name,
        price: bibit.pricePerUnit,
        quantity: qty,
        image: bibit.image,
        unit: bibit.unit
      }
      
      console.log('Adding cart item:', cartItem)
      addToCart(cartItem)
      
      alert(`✅ ${bibit.name} berhasil ditambahkan ke keranjang!`)
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
                  src={bibit.image} 
                  alt={bibit.name}
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              
              <div>
                <h1 className="text-4xl font-bold text-primary-dark mb-4">{bibit.name}</h1>
                <p className="text-3xl font-bold text-primary mb-8">
                  Rp {bibit.pricePerUnit.toLocaleString('id-ID')} / {bibit.unit}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Pilih Jumlah:</h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[1, 5, 10].map((qty) => (
                      <button
                        key={qty}
                        onClick={() => {
                          setQuantity(qty)
                          setCustomQty('')
                        }}
                        className={`py-4 rounded-xl font-bold text-lg transition ${
                          quantity === qty && !customQty
                            ? 'bg-primary text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
                        }`}
                      >
                        {qty} {bibit.unit}
                      </button>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Atau masukkan jumlah:
                    </label>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={customQty}
                      onChange={(e) => setCustomQty(e.target.value)}
                      placeholder="Contoh: 15"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none text-lg"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">Jumlah:</span>
                    <span className="text-xl font-bold text-gray-800">
                      {customQty || quantity} {bibit.unit}
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
