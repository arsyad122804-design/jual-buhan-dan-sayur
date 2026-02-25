export default function BibitSection() {
  const bibits = [
    { name: 'Bibit Cabe Rawit', image: 'https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=400&h=400&fit=crop&q=80', price: 8000 },
    { name: 'Bibit Terong', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400&h=400&fit=crop&q=80', price: 6000 },
    { name: 'Bibit Tomat', image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&h=400&fit=crop&q=80', price: 7000 },
    { name: 'Bibit Anggur', image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=400&fit=crop&q=80', price: 25000 },
    { name: 'Bibit Mangga', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400&fit=crop&q=80', price: 35000 },
  ]

  return (
    <section id="bibit" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-4">
          Bibit Tanaman Berkualitas
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Mulai kebun Anda dengan bibit unggul dari kami
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {bibits.map((bibit, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={bibit.image} 
                  alt={bibit.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-1">{bibit.name}</h3>
              <p className="text-gray-400 text-sm mb-4">Per Polybag</p>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-primary">
                  Rp {bibit.price.toLocaleString('id-ID')}
                </p>
                <button 
                  onClick={() => window.location.href = `/bibit/${idx + 1}`}
                  className="bg-primary hover:bg-primary-dark text-white w-10 h-10 rounded-full transition transform hover:scale-110"
                >
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
