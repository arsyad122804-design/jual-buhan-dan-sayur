'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Category from '@/components/Category'
import FeaturedProducts from '@/components/FeaturedProducts'
import BibitSection from '@/components/BibitSection'
import DealOfMonth from '@/components/DealOfMonth'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Category />
      <FeaturedProducts />
      <BibitSection />
      <DealOfMonth />
      <Footer />
    </main>
  )
}
