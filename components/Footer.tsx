export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-dark to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <i className="fas fa-seedling text-3xl"></i>
              <h3 className="text-2xl font-bold">Petani Muda</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Menyediakan hasil panen segar dan bibit berkualitas langsung dari kebun ke rumah Anda
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-primary-light transition">Home</a></li>
              <li><a href="#produk" className="text-gray-300 hover:text-primary-light transition">Produk</a></li>
              <li><a href="#bibit" className="text-gray-300 hover:text-primary-light transition">Bibit</a></li>
              <li><a href="#tentang" className="text-gray-300 hover:text-primary-light transition">Tentang Kami</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Hubungi Kami</h4>
            <div className="space-y-2 text-gray-300">
              <p><i className="fas fa-map-marker-alt text-primary-light mr-2"></i> Ds. Jatijejer, Dsn. Urung Ururng, Kec. Trawas, Kab. Mojokerto RT 1/RW 1</p>
              <p><i className="fas fa-phone text-primary-light mr-2"></i> +62 820-0547-9994</p>
              <p><i className="fas fa-envelope text-primary-light mr-2"></i> arsyad122804@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 pb-4">
          <h4 className="text-2xl font-bold text-center mb-6">Ikuti Kami</h4>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://wa.me/6282005479994"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 rounded-full hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              <span className="font-semibold">WhatsApp</span>
            </a>
            
            <a
              href="https://instagram.com/fikliarsyad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 px-6 py-3 rounded-full hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <i className="fab fa-instagram text-2xl"></i>
              <span className="font-semibold">Instagram</span>
            </a>
          </div>
        </div>
        
        <div className="text-center text-gray-400 pt-4 border-t border-gray-700">
          <p>&copy; 2026 Petani Muda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
