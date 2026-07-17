import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu'
import Reviews from './components/Reviews'
import LocationMap from './components/LocationMap'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AvisoLegal from './pages/AvisoLegal'
import Privacidad from './pages/Privacidad'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Menu />
        <Reviews />
        <LocationMap />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#FFF7EF] text-[#2D2017] font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/privacidad" element={<Privacidad />} />
      </Routes>
    </div>
  )
}

export default App
