'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function KeranjangPage() {
  const { cart, orderHistory, removeFromCart, updateQuantity, getTotalPrice, clearCart, saveOrderToHistory } = useCart()
  const [activeTab, setActiveTab] = useState<'cart' | 'history'>('cart')

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Keranjang masih kosong!')
      return
    }

    const message = cart.map(item => 
      `${item.name} - ${item.quantity} ${item.unit} - Rp ${(item.price * item.quantity).toLocaleString('id-ID')}`
    ).join('%0A')
    
    const total = getTotalPrice()
    const whatsappMessage = `Halo, saya ingin pre-order:%0A%0A${message}%0A%0ATotal: Rp ${total.toLocaleString('id-ID')}`
    
    // Simpan ke history sebelum membuka WhatsApp
    saveOrderToHistory()
    
    window.open(`https://wa.me/6282005479994?text=${whatsappMessage}`, '_blank')
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary-dark mb-8">Keranjang Belanja</h1>

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('cart')}
              className={`px-8 py-3 rounded-xl font-bold text-lg transition ${
                activeTab === 'cart'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <i className="fas fa-shopping-cart mr-2"></i>
              Keranjang ({cart.length})
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-8 py-3 rounded-xl font-bold text-lg transition ${
                activeTab === 'history'
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <i className="fas fa-history mr-2"></i>
              Riwayat Pesanan ({orderHistory.length})
            </button>
          </div>

          {/* Cart Tab */}
          {activeTab === 'cart' && (
            <>
              {cart.length === 0 ? (
                <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
                  <i className="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
                  <h2 className="text-2xl font-bold text-gray-600 mb-4">Keranjang Kosong</h2>
                  <p className="text-gray-500 mb-6">Belum ada produk di keranjang Anda</p>
                  <a 
                    href="/belanja"
                    className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition"
                  >
                    Mulai Belanja
                  </a>
                </div>
              ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 flex gap-6">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-primary-dark mb-2">{item.name}</h3>
                          <p className="text-gray-500 text-sm mb-3">{item.unit}</p>
                          <p className="text-2xl font-bold text-primary">
                            Rp {item.price.toLocaleString('id-ID')}
                          </p>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 transition"
                          >
                            <i className="fas fa-trash text-xl"></i>
                          </button>
                          <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-primary hover:text-primary-dark font-bold text-xl"
                            >
                              -
                            </button>
                            <span className="font-bold text-lg w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-primary hover:text-primary-dark font-bold text-xl"
                            >
                              +
                            </button>
                          </div>
                          <p className="text-lg font-bold text-gray-700">
                            Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
                      <h2 className="text-2xl font-bold text-primary-dark mb-6">Ringkasan Pesanan</h2>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-gray-600">
                          <span>Subtotal</span>
                          <span className="font-semibold">Rp {getTotalPrice().toLocaleString('id-ID')}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                          <span>Total Item</span>
                          <span className="font-semibold">{cart.reduce((sum, item) => sum + item.quantity, 0)} item</span>
                        </div>
                        <div className="border-t-2 border-gray-200 pt-3 mt-3">
                          <div className="flex justify-between text-xl font-bold text-primary-dark">
                            <span>Total</span>
                            <span>Rp {getTotalPrice().toLocaleString('id-ID')}</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={handleCheckout}
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition mb-3 flex items-center justify-center gap-2"
                      >
                        <i className="fab fa-whatsapp text-2xl"></i>
                        Pre-Order via WhatsApp
                      </button>

                      <button
                        onClick={clearCart}
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
                      >
                        Kosongkan Keranjang
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <>
              {orderHistory.length === 0 ? (
                <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
                  <i className="fas fa-history text-6xl text-gray-300 mb-4"></i>
                  <h2 className="text-2xl font-bold text-gray-600 mb-4">Belum Ada Riwayat</h2>
                  <p className="text-gray-500 mb-6">Anda belum pernah melakukan pesanan</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="bg-white rounded-2xl shadow-lg p-6">
                      <div className="flex justify-between items-start mb-4 pb-4 border-b-2 border-gray-100">
                        <div>
                          <h3 className="text-xl font-bold text-primary-dark mb-1">{order.id}</h3>
                          <p className="text-gray-500 text-sm">
                            <i className="far fa-calendar mr-2"></i>
                            {formatDate(order.date)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 mb-1">Total Pesanan</p>
                          <p className="text-2xl font-bold text-primary">
                            Rp {order.total.toLocaleString('id-ID')}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-grow">
                              <h4 className="font-bold text-gray-800">{item.name}</h4>
                              <p className="text-sm text-gray-500">
                                {item.quantity} {item.unit} × Rp {item.price.toLocaleString('id-ID')}
                              </p>
                            </div>
                            <p className="font-bold text-primary">
                              Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
