import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function KontakPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-primary-dark mb-6 text-center">
              Hubungi Kami
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Kami siap membantu Anda. Hubungi kami melalui berbagai channel yang tersedia
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-primary-dark mb-12 text-center">
                Informasi Kontak
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-green-50 to-white border-2 border-primary rounded-2xl p-8">
                  <i className="fas fa-map-marker-alt text-4xl text-primary mb-4"></i>
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">Alamat</h3>
                  <p className="text-gray-600 text-lg">
                    Ds. Jatijejer, Dsn. Urung Ururng<br />
                    Kec. Trawas, Kab. Mojokerto<br />
                    RT 1 / RW 1, Jawa Timur
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white border-2 border-primary rounded-2xl p-8">
                  <i className="fas fa-phone text-4xl text-primary mb-4"></i>
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">Telepon</h3>
                  <p className="text-gray-600 text-lg">
                    +62 82005479994<br />
                    <br />
                    Senin - Sabtu: 08:00 - 17:00 WIB
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white border-2 border-primary rounded-2xl p-8">
                  <i className="fas fa-envelope text-4xl text-primary mb-4"></i>
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">Email</h3>
                  <p className="text-gray-600 text-lg">
                    arsyad122804@gmail.com<br />
                    <br />
                    <br />
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white border-2 border-primary rounded-2xl p-8">
                  <i className="fas fa-clock text-4xl text-primary mb-4"></i>
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">Jam Operasional</h3>
                  <p className="text-gray-600 text-lg">
                    Senin - Jumat: 08:00 - 17:00<br />
                    Sabtu: 08:00 - 14:00<br />
                    Minggu & Libur: Tutup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-primary-light to-green-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary-dark mb-4 text-center">
              Ikuti Kami di Media Sosial
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Dapatkan update terbaru, promo, dan tips pertanian dari kami
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <a
                href="https://wa.me/6282005479994"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <i className="fab fa-whatsapp text-6xl text-green-500 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Chat langsung dengan kami</p>
                <p className="text-primary font-semibold">+62 820-0547-9994</p>
              </a>

              <a
                href="https://instagram.com/fikliarsyad"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <i className="fab fa-instagram text-6xl text-pink-500 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Instagram</h3>
                <p className="text-gray-600 mb-4">Follow untuk update harian</p>
                <p className="text-primary font-semibold">@fikliarsyad</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
