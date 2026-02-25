export default function DealOfMonth() {
  const deals = [
    {
      image: 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=600&h=400&fit=crop&q=80',
      badge: 'Panen Minggu Ke-1',
      name: 'Labu Kuning',
      date: 'Panen: 1-7 Maret 2026',
      desc: 'Labu kuning segar hasil panen organik, cocok untuk sayur dan kolak',
      price: 'Mulai Rp 15.000/kg',
    },
    {
      image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=600&h=400&fit=crop&q=80',
      badge: 'Panen Minggu Ke-2',
      name: 'Timun Segar',
      date: 'Panen: 8-14 Maret 2026',
      desc: 'Timun hijau segar dan renyah, sempurna untuk lalapan dan salad',
      price: 'Mulai Rp 8.000/kg',
    },
    {
      image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop&q=80',
      badge: 'Panen Minggu Ke-3',
      name: 'Jagung Manis',
      date: 'Panen: 15-21 Maret 2026',
      desc: 'Jagung manis pilihan dengan biji yang penuh dan manis alami',
      price: 'Mulai Rp 12.000/kg',
    },
    {
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&h=400&fit=crop&q=80',
      badge: 'Panen Minggu Ke-4',
      name: 'Wortel Orange',
      date: 'Panen: 22-31 Maret 2026',
      desc: 'Wortel segar kaya vitamin A, cocok untuk jus dan masakan',
      price: 'Mulai Rp 20.000/kg',
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-4">
          Jadwal Panen Bulan Ini
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Rencanakan pembelian Anda sesuai jadwal panen kami
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-orange-400 text-white px-4 py-1 rounded-full text-sm mb-3">
                  {deal.badge}
                </span>
                <h3 className="text-2xl font-bold text-primary-dark mb-2">{deal.name}</h3>
                <p className="text-gray-600 mb-2">{deal.date}</p>
                <p className="text-gray-500 mb-4 leading-relaxed">{deal.desc}</p>
                <p className="text-xl font-bold text-primary mb-4">{deal.price}</p>
                <button className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition">
                  Pre-Order Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
