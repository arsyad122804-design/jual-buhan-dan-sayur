import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TentangPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-primary-dark mb-6 text-center">
              Tentang Petani Muda
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Kami adalah platform yang menghubungkan petani lokal dengan konsumen untuk menyediakan produk pertanian segar dan berkualitas
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary-dark mb-6">Visi Kami</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Menjadi platform terdepan dalam menyediakan produk pertanian organik berkualitas tinggi yang menghubungkan petani lokal dengan konsumen di seluruh Indonesia.
                </p>
                <h2 className="text-4xl font-bold text-primary-dark mb-6">Misi Kami</h2>
                <ul className="space-y-3 text-lg text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mr-3 mt-1"></i>
                    <span>Memberdayakan petani lokal dengan akses pasar yang lebih luas</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mr-3 mt-1"></i>
                    <span>Menyediakan produk segar dan organik untuk konsumen</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mr-3 mt-1"></i>
                    <span>Mendukung pertanian berkelanjutan dan ramah lingkungan</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=600&fit=crop&q=80" 
                  alt="Petani" 
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-primary-light to-green-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary-dark mb-12 text-center">Nilai-Nilai Kami</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <i className="fas fa-heart text-5xl text-primary mb-4"></i>
                <h3 className="text-2xl font-bold text-primary-dark mb-3">Kualitas</h3>
                <p className="text-gray-600">Kami hanya menyediakan produk dengan kualitas terbaik untuk kepuasan pelanggan</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <i className="fas fa-handshake text-5xl text-primary mb-4"></i>
                <h3 className="text-2xl font-bold text-primary-dark mb-3">Kepercayaan</h3>
                <p className="text-gray-600">Membangun hubungan jangka panjang berdasarkan kepercayaan dan transparansi</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <i className="fas fa-leaf text-5xl text-primary mb-4"></i>
                <h3 className="text-2xl font-bold text-primary-dark mb-3">Keberlanjutan</h3>
                <p className="text-gray-600">Mendukung praktik pertanian yang ramah lingkungan dan berkelanjutan</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-primary-dark mb-12">Pencapaian Kami</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <p className="text-5xl font-bold text-primary mb-2">5.000+</p>
                <p className="text-gray-600 text-lg">Pelanggan Setia</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">100+</p>
                <p className="text-gray-600 text-lg">Petani Mitra</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">50+</p>
                <p className="text-gray-600 text-lg">Jenis Produk</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-primary mb-2">20+</p>
                <p className="text-gray-600 text-lg">Kota Terjangkau</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
