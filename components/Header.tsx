export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-dark to-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <i className="fas fa-seedling text-3xl"></i>
            <a href="/">
              <h1 className="text-2xl font-bold cursor-pointer hover:text-primary-light transition">Petani Muda</h1>
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li><a href="/" className="hover:text-primary-light transition">Home</a></li>
              <li><a href="/belanja" className="hover:text-primary-light transition">Produk</a></li>
              <li><a href="/bibit" className="hover:text-primary-light transition">Bibit</a></li>
              <li><a href="/tentang" className="hover:text-primary-light transition">Tentang</a></li>
              <li><a href="/kontak" className="hover:text-primary-light transition">Kontak</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
