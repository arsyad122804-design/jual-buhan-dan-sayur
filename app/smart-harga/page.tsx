'use client'

import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Import Leaflet map secara dynamic untuk menghindari SSR issues
const IndonesiaMap = dynamic(() => import('@/components/IndonesiaMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center border-4 border-cyan-400">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-4"></div>
        <p className="text-gray-600 font-semibold">Memuat peta...</p>
      </div>
    </div>
  )
})

export default function SmartHargaPage() {
  const [selectedProduct, setSelectedProduct] = useState('')
  const [selectedYear, setSelectedYear] = useState('2026')

  const products = [
    // Buah-buahan
    'Apel', 'Jeruk', 'Mangga', 'Pisang', 'Anggur', 'Semangka', 'Melon', 'Pepaya', 
    'Strawberry', 'Nanas', 'Jambu', 'Durian', 'Rambutan', 'Manggis', 'Salak',
    // Sayuran
    'Cabe Merah', 'Cabe Rawit', 'Tomat', 'Bawang Merah', 'Bawang Putih', 'Kentang', 
    'Wortel', 'Kangkung', 'Bayam', 'Sawi', 'Terong', 'Timun', 'Labu', 'Jagung',
    'Brokoli', 'Kol', 'Kembang Kol'
  ]

  const years = ['2024', '2025', '2026']

  const priceData: any = {
    // BUAH-BUAHAN
    'Apel': {
      '2024': [45000, 47000, 46000, 48000, 50000, 52000, 51000, 49000, 48000, 47000, 46000, 45000],
      '2025': [46000, 48000, 47000, 49000, 51000, 53000, 52000, 50000, 49000, 48000, 47000, 46000],
      '2026': [47000, 49000, 48000, 50000, 52000, 54000, 53000, 51000, 50000, 49000, 48000, 47000]
    },
    'Jeruk': {
      '2024': [25000, 26000, 27000, 28000, 30000, 32000, 31000, 29000, 28000, 27000, 26000, 25000],
      '2025': [26000, 27000, 28000, 29000, 31000, 33000, 32000, 30000, 29000, 28000, 27000, 26000],
      '2026': [27000, 28000, 29000, 30000, 32000, 34000, 33000, 31000, 30000, 29000, 28000, 27000]
    },
    'Mangga': {
      '2024': [30000, 32000, 35000, 38000, 40000, 42000, 40000, 38000, 35000, 32000, 30000, 28000],
      '2025': [31000, 33000, 36000, 39000, 41000, 43000, 41000, 39000, 36000, 33000, 31000, 29000],
      '2026': [32000, 34000, 37000, 40000, 42000, 44000, 42000, 40000, 37000, 34000, 32000, 30000]
    },
    'Pisang': {
      '2024': [15000, 16000, 17000, 18000, 19000, 20000, 19000, 18000, 17000, 16000, 15000, 14000],
      '2025': [16000, 17000, 18000, 19000, 20000, 21000, 20000, 19000, 18000, 17000, 16000, 15000],
      '2026': [17000, 18000, 19000, 20000, 21000, 22000, 21000, 20000, 19000, 18000, 17000, 16000]
    },
    'Anggur': {
      '2024': [55000, 57000, 58000, 60000, 62000, 65000, 63000, 61000, 59000, 57000, 56000, 55000],
      '2025': [56000, 58000, 59000, 61000, 63000, 66000, 64000, 62000, 60000, 58000, 57000, 56000],
      '2026': [57000, 59000, 60000, 62000, 64000, 67000, 65000, 63000, 61000, 59000, 58000, 57000]
    },
    'Semangka': {
      '2024': [12000, 13000, 14000, 15000, 16000, 17000, 16000, 15000, 14000, 13000, 12000, 11000],
      '2025': [13000, 14000, 15000, 16000, 17000, 18000, 17000, 16000, 15000, 14000, 13000, 12000],
      '2026': [14000, 15000, 16000, 17000, 18000, 19000, 18000, 17000, 16000, 15000, 14000, 13000]
    },
    'Melon': {
      '2024': [18000, 19000, 20000, 21000, 22000, 23000, 22000, 21000, 20000, 19000, 18000, 17000],
      '2025': [19000, 20000, 21000, 22000, 23000, 24000, 23000, 22000, 21000, 20000, 19000, 18000],
      '2026': [20000, 21000, 22000, 23000, 24000, 25000, 24000, 23000, 22000, 21000, 20000, 19000]
    },
    'Pepaya': {
      '2024': [10000, 11000, 12000, 13000, 14000, 15000, 14000, 13000, 12000, 11000, 10000, 9000],
      '2025': [11000, 12000, 13000, 14000, 15000, 16000, 15000, 14000, 13000, 12000, 11000, 10000],
      '2026': [12000, 13000, 14000, 15000, 16000, 17000, 16000, 15000, 14000, 13000, 12000, 11000]
    },
    'Strawberry': {
      '2024': [60000, 62000, 65000, 68000, 70000, 72000, 70000, 68000, 65000, 62000, 60000, 58000],
      '2025': [61000, 63000, 66000, 69000, 71000, 73000, 71000, 69000, 66000, 63000, 61000, 59000],
      '2026': [62000, 64000, 67000, 70000, 72000, 74000, 72000, 70000, 67000, 64000, 62000, 60000]
    },
    'Nanas': {
      '2024': [14000, 15000, 16000, 17000, 18000, 19000, 18000, 17000, 16000, 15000, 14000, 13000],
      '2025': [15000, 16000, 17000, 18000, 19000, 20000, 19000, 18000, 17000, 16000, 15000, 14000],
      '2026': [16000, 17000, 18000, 19000, 20000, 21000, 20000, 19000, 18000, 17000, 16000, 15000]
    },
    'Jambu': {
      '2024': [20000, 21000, 22000, 23000, 24000, 25000, 24000, 23000, 22000, 21000, 20000, 19000],
      '2025': [21000, 22000, 23000, 24000, 25000, 26000, 25000, 24000, 23000, 22000, 21000, 20000],
      '2026': [22000, 23000, 24000, 25000, 26000, 27000, 26000, 25000, 24000, 23000, 22000, 21000]
    },
    'Durian': {
      '2024': [80000, 85000, 90000, 95000, 100000, 105000, 100000, 95000, 90000, 85000, 80000, 75000],
      '2025': [82000, 87000, 92000, 97000, 102000, 107000, 102000, 97000, 92000, 87000, 82000, 77000],
      '2026': [84000, 89000, 94000, 99000, 104000, 109000, 104000, 99000, 94000, 89000, 84000, 79000]
    },
    'Rambutan': {
      '2024': [18000, 19000, 20000, 22000, 24000, 26000, 24000, 22000, 20000, 19000, 18000, 17000],
      '2025': [19000, 20000, 21000, 23000, 25000, 27000, 25000, 23000, 21000, 20000, 19000, 18000],
      '2026': [20000, 21000, 22000, 24000, 26000, 28000, 26000, 24000, 22000, 21000, 20000, 19000]
    },
    'Manggis': {
      '2024': [35000, 37000, 40000, 43000, 45000, 48000, 45000, 43000, 40000, 37000, 35000, 33000],
      '2025': [36000, 38000, 41000, 44000, 46000, 49000, 46000, 44000, 41000, 38000, 36000, 34000],
      '2026': [37000, 39000, 42000, 45000, 47000, 50000, 47000, 45000, 42000, 39000, 37000, 35000]
    },
    'Salak': {
      '2024': [22000, 23000, 24000, 25000, 26000, 27000, 26000, 25000, 24000, 23000, 22000, 21000],
      '2025': [23000, 24000, 25000, 26000, 27000, 28000, 27000, 26000, 25000, 24000, 23000, 22000],
      '2026': [24000, 25000, 26000, 27000, 28000, 29000, 28000, 27000, 26000, 25000, 24000, 23000]
    },
    
    // SAYURAN
    'Cabe Merah': {
      '2024': [40000, 45000, 50000, 48000, 46000, 44000, 42000, 40000, 43000, 47000, 50000, 52000],
      '2025': [42000, 47000, 52000, 50000, 48000, 46000, 44000, 42000, 45000, 49000, 52000, 54000],
      '2026': [43000, 48000, 53000, 51000, 49000, 47000, 45000, 43000, 46000, 50000, 53000, 55000]
    },
    'Cabe Rawit': {
      '2024': [50000, 55000, 60000, 58000, 56000, 54000, 52000, 50000, 53000, 57000, 60000, 62000],
      '2025': [52000, 57000, 62000, 60000, 58000, 56000, 54000, 52000, 55000, 59000, 62000, 64000],
      '2026': [53000, 58000, 63000, 61000, 59000, 57000, 55000, 53000, 56000, 60000, 63000, 65000]
    },
    'Tomat': {
      '2024': [12000, 13000, 14000, 15000, 16000, 17000, 16000, 15000, 14000, 13000, 12000, 11000],
      '2025': [13000, 14000, 15000, 16000, 17000, 18000, 17000, 16000, 15000, 14000, 13000, 12000],
      '2026': [14000, 15000, 16000, 17000, 18000, 19000, 18000, 17000, 16000, 15000, 14000, 13000]
    },
    'Bawang Merah': {
      '2024': [35000, 38000, 40000, 42000, 45000, 48000, 46000, 44000, 42000, 40000, 38000, 36000],
      '2025': [36000, 39000, 41000, 43000, 46000, 49000, 47000, 45000, 43000, 41000, 39000, 37000],
      '2026': [37000, 40000, 42000, 44000, 47000, 50000, 48000, 46000, 44000, 42000, 40000, 38000]
    },
    'Bawang Putih': {
      '2024': [40000, 42000, 44000, 46000, 48000, 50000, 48000, 46000, 44000, 42000, 40000, 38000],
      '2025': [41000, 43000, 45000, 47000, 49000, 51000, 49000, 47000, 45000, 43000, 41000, 39000],
      '2026': [42000, 44000, 46000, 48000, 50000, 52000, 50000, 48000, 46000, 44000, 42000, 40000]
    },
    'Kentang': {
      '2024': [15000, 16000, 17000, 18000, 19000, 20000, 19000, 18000, 17000, 16000, 15000, 14000],
      '2025': [16000, 17000, 18000, 19000, 20000, 21000, 20000, 19000, 18000, 17000, 16000, 15000],
      '2026': [17000, 18000, 19000, 20000, 21000, 22000, 21000, 20000, 19000, 18000, 17000, 16000]
    },
    'Wortel': {
      '2024': [12000, 13000, 14000, 15000, 16000, 17000, 16000, 15000, 14000, 13000, 12000, 11000],
      '2025': [13000, 14000, 15000, 16000, 17000, 18000, 17000, 16000, 15000, 14000, 13000, 12000],
      '2026': [14000, 15000, 16000, 17000, 18000, 19000, 18000, 17000, 16000, 15000, 14000, 13000]
    },
    'Kangkung': {
      '2024': [5000, 5500, 6000, 6500, 7000, 7500, 7000, 6500, 6000, 5500, 5000, 4500],
      '2025': [5500, 6000, 6500, 7000, 7500, 8000, 7500, 7000, 6500, 6000, 5500, 5000],
      '2026': [6000, 6500, 7000, 7500, 8000, 8500, 8000, 7500, 7000, 6500, 6000, 5500]
    },
    'Bayam': {
      '2024': [5000, 5500, 6000, 6500, 7000, 7500, 7000, 6500, 6000, 5500, 5000, 4500],
      '2025': [5500, 6000, 6500, 7000, 7500, 8000, 7500, 7000, 6500, 6000, 5500, 5000],
      '2026': [6000, 6500, 7000, 7500, 8000, 8500, 8000, 7500, 7000, 6500, 6000, 5500]
    },
    'Sawi': {
      '2024': [6000, 6500, 7000, 7500, 8000, 8500, 8000, 7500, 7000, 6500, 6000, 5500],
      '2025': [6500, 7000, 7500, 8000, 8500, 9000, 8500, 8000, 7500, 7000, 6500, 6000],
      '2026': [7000, 7500, 8000, 8500, 9000, 9500, 9000, 8500, 8000, 7500, 7000, 6500]
    },
    'Terong': {
      '2024': [10000, 11000, 12000, 13000, 14000, 15000, 14000, 13000, 12000, 11000, 10000, 9000],
      '2025': [11000, 12000, 13000, 14000, 15000, 16000, 15000, 14000, 13000, 12000, 11000, 10000],
      '2026': [12000, 13000, 14000, 15000, 16000, 17000, 16000, 15000, 14000, 13000, 12000, 11000]
    },
    'Timun': {
      '2024': [8000, 8500, 9000, 9500, 10000, 10500, 10000, 9500, 9000, 8500, 8000, 7500],
      '2025': [8500, 9000, 9500, 10000, 10500, 11000, 10500, 10000, 9500, 9000, 8500, 8000],
      '2026': [9000, 9500, 10000, 10500, 11000, 11500, 11000, 10500, 10000, 9500, 9000, 8500]
    },
    'Labu': {
      '2024': [7000, 7500, 8000, 8500, 9000, 9500, 9000, 8500, 8000, 7500, 7000, 6500],
      '2025': [7500, 8000, 8500, 9000, 9500, 10000, 9500, 9000, 8500, 8000, 7500, 7000],
      '2026': [8000, 8500, 9000, 9500, 10000, 10500, 10000, 9500, 9000, 8500, 8000, 7500]
    },
    'Jagung': {
      '2024': [6000, 6500, 7000, 7500, 8000, 8500, 8000, 7500, 7000, 6500, 6000, 5500],
      '2025': [6500, 7000, 7500, 8000, 8500, 9000, 8500, 8000, 7500, 7000, 6500, 6000],
      '2026': [7000, 7500, 8000, 8500, 9000, 9500, 9000, 8500, 8000, 7500, 7000, 6500]
    },
    'Brokoli': {
      '2024': [25000, 26000, 27000, 28000, 29000, 30000, 29000, 28000, 27000, 26000, 25000, 24000],
      '2025': [26000, 27000, 28000, 29000, 30000, 31000, 30000, 29000, 28000, 27000, 26000, 25000],
      '2026': [27000, 28000, 29000, 30000, 31000, 32000, 31000, 30000, 29000, 28000, 27000, 26000]
    },
    'Kol': {
      '2024': [10000, 11000, 12000, 13000, 14000, 15000, 14000, 13000, 12000, 11000, 10000, 9000],
      '2025': [11000, 12000, 13000, 14000, 15000, 16000, 15000, 14000, 13000, 12000, 11000, 10000],
      '2026': [12000, 13000, 14000, 15000, 16000, 17000, 16000, 15000, 14000, 13000, 12000, 11000]
    },
    'Kembang Kol': {
      '2024': [20000, 21000, 22000, 23000, 24000, 25000, 24000, 23000, 22000, 21000, 20000, 19000],
      '2025': [21000, 22000, 23000, 24000, 25000, 26000, 25000, 24000, 23000, 22000, 21000, 20000],
      '2026': [22000, 23000, 24000, 25000, 26000, 27000, 26000, 25000, 24000, 23000, 22000, 21000]
    }
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']

  // Data kota dengan koordinat geografis - 15 kota dari berbagai provinsi
  const cityData = useMemo(() => {
    if (!selectedProduct || !priceData[selectedProduct]) return []
    
    const currentMonth = new Date().getMonth()
    const basePrice = priceData[selectedProduct][selectedYear][currentMonth]
    
    return [
      { name: 'Jakarta', position: [-6.2088, 106.8456] as [number, number], province: 'DKI Jakarta', price: basePrice + 2000 },
      { name: 'Surabaya', position: [-7.2575, 112.7521] as [number, number], province: 'Jawa Timur', price: basePrice - 1000 },
      { name: 'Bandung', position: [-6.9175, 107.6191] as [number, number], province: 'Jawa Barat', price: basePrice + 500 },
      { name: 'Medan', position: [3.5952, 98.6722] as [number, number], province: 'Sumatera Utara', price: basePrice + 1500 },
      { name: 'Makassar', position: [-5.1477, 119.4327] as [number, number], province: 'Sulawesi Selatan', price: basePrice + 3000 },
      { name: 'Denpasar', position: [-8.6705, 115.2126] as [number, number], province: 'Bali', price: basePrice + 2500 },
      { name: 'Semarang', position: [-6.9667, 110.4167] as [number, number], province: 'Jawa Tengah', price: basePrice + 800 },
      { name: 'Palembang', position: [-2.9761, 104.7754] as [number, number], province: 'Sumatera Selatan', price: basePrice + 1800 },
      { name: 'Yogyakarta', position: [-7.7956, 110.3695] as [number, number], province: 'DI Yogyakarta', price: basePrice + 600 },
      { name: 'Malang', position: [-7.9797, 112.6304] as [number, number], province: 'Jawa Timur', price: basePrice - 500 },
      { name: 'Balikpapan', position: [-1.2379, 116.8529] as [number, number], province: 'Kalimantan Timur', price: basePrice + 3500 },
      { name: 'Manado', position: [1.4748, 124.8421] as [number, number], province: 'Sulawesi Utara', price: basePrice + 4000 },
      { name: 'Pontianak', position: [-0.0263, 109.3425] as [number, number], province: 'Kalimantan Barat', price: basePrice + 2800 },
      { name: 'Banjarmasin', position: [-3.3194, 114.5906] as [number, number], province: 'Kalimantan Selatan', price: basePrice + 3200 },
      { name: 'Mataram', position: [-8.5833, 116.1167] as [number, number], province: 'Nusa Tenggara Barat', price: basePrice + 2700 },
    ]
  }, [selectedProduct, selectedYear, priceData])

  const getMaxPrice = () => {
    if (!selectedProduct || !priceData[selectedProduct]) return 60000
    const prices = priceData[selectedProduct][selectedYear] || []
    return Math.max(...prices) + 10000
  }

  const getChartHeight = (price: number) => {
    const maxPrice = getMaxPrice()
    return (price / maxPrice) * 100
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary-dark mb-4 text-center">
            Smart Harga
          </h1>
          <p className="text-center text-gray-600 text-lg mb-12">
            Pantau pergerakan harga buah dan sayuran setiap bulan
          </p>

          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-gray-700 font-bold mb-3 text-lg">
                  Pilih Produk:
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none text-lg"
                >
                  <option value="">-- Pilih Produk --</option>
                  {products.map((product) => (
                    <option key={product} value={product}>{product}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-3 text-lg">
                  Pilih Tahun:
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none text-lg"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            {selectedProduct && priceData[selectedProduct] ? (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-primary-dark mb-6 text-center">
                  Grafik Harga {selectedProduct} Tahun {selectedYear}
                </h2>
                
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
                  <div className="flex items-end justify-between gap-2 h-96 relative">
                    {priceData[selectedProduct][selectedYear].map((price: number, idx: number) => (
                      <div key={idx} className="flex-1 flex flex-col items-center justify-end relative">
                        {/* Bar grafik */}
                        <div 
                          className="bg-gradient-to-t from-primary to-primary-light rounded-t-lg transition-all duration-500 hover:scale-105 cursor-pointer relative group w-full"
                          style={{ height: `${getChartHeight(price)}%`, minHeight: '50px' }}
                        >
                          {/* Tooltip detail saat hover */}
                          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-[60] shadow-xl">
                            Rp {price.toLocaleString('id-ID')}
                            <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45"></div>
                          </div>
                        </div>
                        
                        {/* Label bulan */}
                        <p className="text-xs font-semibold text-gray-700 mt-3">{months[idx]}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <p className="text-gray-600 mb-1">Harga Terendah</p>
                    <p className="text-2xl font-bold text-blue-600">
                      Rp {Math.min(...priceData[selectedProduct][selectedYear]).toLocaleString('id-ID')}
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl text-center">
                    <p className="text-gray-600 mb-1">Harga Rata-rata</p>
                    <p className="text-2xl font-bold text-green-600">
                      Rp {Math.round(priceData[selectedProduct][selectedYear].reduce((a: number, b: number) => a + b) / 12).toLocaleString('id-ID')}
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl text-center">
                    <p className="text-gray-600 mb-1">Harga Tertinggi</p>
                    <p className="text-2xl font-bold text-red-600">
                      Rp {Math.max(...priceData[selectedProduct][selectedYear]).toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <i className="fas fa-chart-line text-6xl text-gray-300 mb-4"></i>
                <p className="text-xl text-gray-500">Pilih produk untuk melihat grafik harga</p>
              </div>
            )}
          </div>

          {selectedProduct && priceData[selectedProduct] && (
            <div className="max-w-6xl mx-auto mt-8 bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-primary-dark mb-6 text-center">
                Harga Pasar {selectedProduct} per Daerah
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4 text-center">Peta Interaktif Indonesia</h3>
                  <IndonesiaMap cities={cityData} />
                  <p className="text-sm text-gray-600 mt-3 text-center">
                    <i className="fas fa-info-circle text-primary mr-2"></i>
                    Klik marker merah untuk melihat detail harga di setiap kota
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4">Daftar Harga per Daerah</h3>
                  <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    {cityData.map((city, index) => (
                      <div key={index} className="bg-gradient-to-r from-green-50 to-white p-4 rounded-xl border-l-4 border-primary hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-bold text-gray-800">{city.name}</p>
                            <p className="text-sm text-gray-500">{city.province}</p>
                          </div>
                          <p className="text-xl font-bold text-primary">
                            Rp {city.price.toLocaleString('id-ID')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    <i className="fas fa-arrow-down mr-1"></i>
                    Scroll untuk melihat semua kota
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <i className="fas fa-info-circle text-yellow-600 mr-2"></i>
                  <strong>Catatan:</strong> Harga dapat berbeda tergantung pasar lokal dan ketersediaan stok. 
                  Data diperbarui setiap hari dari berbagai pasar tradisional dan modern.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
