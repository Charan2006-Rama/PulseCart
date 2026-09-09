import Navbar from './components/Navbar'
import HeroSection from './components/landing/HeroSection'
import CategoriesSection from './components/landing/CategoriesSection'
import FeaturedProducts from './components/landing/FeaturedProducts'
import CTASection from './components/landing/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[var(--pc-background)]">
      <Navbar />

      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
        <CTASection />
      </main>

      <Footer />
      
    </div>
  )
}

export default App