export default function Category() {
  const categories = [
    { icon: '/images/Cabe Kriting Merah segar.jpg', name: 'Cabe' },
    { icon: 'https://images.unsplash.com/photo-1659261200833-ec8761558af7?w=200&h=200&fit=crop&q=80', name: 'Terong' },
    { icon: 'https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=200&h=200&fit=crop&q=80', name: 'Anggur' },
    { icon: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200&h=200&fit=crop&q=80', name: 'Sayuran Hijau' },
    { icon: 'https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=200&h=200&fit=crop&q=80', name: 'Bibit Tanaman' },
    { icon: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=200&h=200&fit=crop&q=80', name: 'Buah & Sayur' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">
          Kategori Produk
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-primary hover:text-white transition transform hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-lg overflow-hidden"
            >
              <div className="w-full h-24 mb-3 overflow-hidden rounded-lg">
                <img 
                  src={cat.icon} 
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
