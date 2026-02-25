'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProdukPage() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
                  Sayuran & Buah Segar Langsung dari Kebun
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Dapatkan produk pertanian berkualitas tinggi, 100% organik, dan dipanen saat matang sempurna. 
                  Kesegaran terjamin dari kebun ke meja makan Anda.
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => window.location.href = '/belanja'}
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-lg"
                  >
                    <i className="fas fa-shopping-cart mr-2"></i>
                    Belanja Sekarang
                  </button>
                  <button className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
                    <i className="fas fa-phone mr-2"></i>
                    Hubungi Kami
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=600&fit=crop&q=80" 
                  alt="Sayuran Segar" 
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Masalah yang Dialami */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-primary-dark mb-4">
              Masalah yang Sering Dialami Pembeli
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Kami memahami kesulitan Anda dalam mendapatkan produk berkualitas
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center hover:shadow-lg transition">
                <i className="fas fa-times-circle text-5xl text-red-500 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Produk Tidak Segar</h3>
                <p className="text-gray-600">Sayuran dan buah di pasar tradisional sering sudah layu dan tidak segar</p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center hover:shadow-lg transition">
                <i className="fas fa-times-circle text-5xl text-red-500 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Harga Tidak Stabil</h3>
                <p className="text-gray-600">Harga berubah-ubah setiap hari, sulit untuk budgeting belanja bulanan</p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center hover:shadow-lg transition">
                <i className="fas fa-times-circle text-5xl text-red-500 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Kualitas Tidak Konsisten</h3>
                <p className="text-gray-600">Kadang bagus, kadang jelek. Tidak ada jaminan kualitas yang sama</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solusi */}
        <section className="py-16 bg-gradient-to-br from-primary-light to-green-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-primary-dark mb-6">
              Solusi dari Petani Muda
            </h2>
            <p className="text-center text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
              Kami hadir untuk mengatasi semua masalah Anda dengan sistem yang transparan dan berkualitas
            </p>
            
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <i className="fas fa-leaf text-3xl text-primary mt-1"></i>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-dark mb-2">Apa Produk Kami?</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Sayuran dan buah-buahan organik yang ditanam tanpa pestisida kimia. 
                        Dipanen langsung dari kebun kami yang tersebar di berbagai daerah.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <i className="fas fa-cogs text-3xl text-primary mt-1"></i>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-dark mb-2">Cara Kerja</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Panen pagi → Sortir kualitas → Packing aman → Kirim hari itu juga. 
                        Dari kebun ke tangan Anda dalam waktu maksimal 24 jam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-light bg-opacity-30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-primary-dark mb-3 flex items-center">
                  <i className="fas fa-star text-primary mr-3"></i>
                  Kenapa Berbeda dari yang Lain?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mr-3 mt-1"></i>
                    <span>Langsung dari petani, tanpa perantara - harga lebih murah</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mr-3 mt-1"></i>
                    <span>Sistem pre-order memastikan produk selalu segar</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mr-3 mt-1"></i>
                    <span>Garansi uang kembali jika tidak puas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Keunggulan / Benefit */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-primary-dark mb-4">
              Keunggulan Produk Kami
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Mengapa ribuan pelanggan memilih Petani Muda
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-primary rounded-2xl p-8 text-center hover:shadow-xl transition transform hover:-translate-y-2">
                <i className="fas fa-seedling text-5xl text-primary mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-3">100% Organik</h3>
                <p className="text-gray-600">Tanpa pestisida kimia berbahaya, aman untuk keluarga</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-primary rounded-2xl p-8 text-center hover:shadow-xl transition transform hover:-translate-y-2">
                <i className="fas fa-truck-fast text-5xl text-primary mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Pengiriman Cepat</h3>
                <p className="text-gray-600">Maksimal 24 jam sampai ke tangan Anda</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-primary rounded-2xl p-8 text-center hover:shadow-xl transition transform hover:-translate-y-2">
                <i className="fas fa-shield-alt text-5xl text-primary mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Garansi Kualitas</h3>
                <p className="text-gray-600">Uang kembali 100% jika tidak puas</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-primary rounded-2xl p-8 text-center hover:shadow-xl transition transform hover:-translate-y-2">
                <i className="fas fa-tags text-5xl text-primary mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Harga Stabil</h3>
                <p className="text-gray-600">Tidak terpengaruh fluktuasi pasar</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimoni */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-primary-dark mb-4">
              Testimoni Pelanggan Setia
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              <i className="fas fa-users text-primary mr-2"></i>
              Dipercaya oleh <span className="font-bold text-primary">5.000+</span> pelanggan di seluruh Indonesia
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">Ibu Siti Rahayu</p>
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "Sudah 6 bulan langganan di sini. Sayurannya selalu segar dan harga stabil. 
                  Anak-anak jadi suka makan sayur karena rasanya enak!"
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    B
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">Pak Budi Santoso</p>
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "Pengiriman cepat, packing rapi. Yang paling penting kualitasnya konsisten. 
                  Recommended banget untuk yang peduli kesehatan keluarga!"
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    A
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">Ibu Ani Wijaya</p>
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "Harga lebih murah dari supermarket tapi kualitas jauh lebih bagus. 
                  Pelayanan ramah dan responsif. Puas banget!"
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 text-center shadow">
                <p className="text-4xl font-bold text-primary mb-2">5.000+</p>
                <p className="text-gray-600">Pelanggan Aktif</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow">
                <p className="text-4xl font-bold text-primary mb-2">4.9/5</p>
                <p className="text-gray-600">Rating Kepuasan</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow">
                <p className="text-4xl font-bold text-primary mb-2">98%</p>
                <p className="text-gray-600">Repeat Order</p>
              </div>
            </div>
          </div>
        </section>

        {/* Promo / Penawaran Spesial */}
        <section className="py-20 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-6">Promo Spesial Bulan Ini!</h2>
            <div className="max-w-3xl mx-auto mb-8">
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-2xl p-8 mb-6">
                <p className="text-3xl font-bold mb-2">Diskon 20% untuk Member Baru</p>
                <p className="text-xl">Gunakan kode: <span className="bg-white text-red-500 px-4 py-2 rounded-lg font-bold">PETANIMUDA20</span></p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                  <i className="fas fa-gift text-3xl mb-3"></i>
                  <p className="font-bold text-xl mb-2">Gratis Ongkir</p>
                  <p>Untuk pembelian minimal Rp 100.000</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                  <i className="fas fa-percent text-3xl mb-3"></i>
                  <p className="font-bold text-xl mb-2">Cashback 10%</p>
                  <p>Untuk pembelian di atas Rp 500.000</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <button 
                onClick={() => window.location.href = '/belanja'}
                className="bg-white text-red-500 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-2xl"
              >
                <i className="fas fa-shopping-cart mr-2"></i>
                Belanja Sekarang
              </button>
              <button 
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                className="bg-green-500 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-green-600 transition transform hover:scale-105 shadow-2xl"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Chat WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
