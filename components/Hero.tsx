export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-green-50 to-green-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm mb-4">
              100% Organik & Segar
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4 leading-tight">
              Hasil Panen Segar Langsung dari Kebun
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Dapatkan sayuran dan buah-buahan berkualitas tinggi serta bibit unggul untuk kebun Anda
            </p>
            <button 
              onClick={() => window.location.href = '/belanja'}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              Belanja Sekarang
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=600&fit=crop&q=80"
                alt="Fresh Vegetables"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute top-8 right-8 bg-gradient-to-br from-red-400 to-orange-500 text-white p-8 rounded-3xl shadow-2xl">
                <h3 className="text-4xl font-bold mb-2">40% OFF</h3>
                <p className="text-lg">Sayuran Segar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
