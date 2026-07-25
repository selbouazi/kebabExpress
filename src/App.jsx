import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Reviews from './components/Reviews'
import LocationMap from './components/LocationMap'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AvisoLegal from './pages/AvisoLegal'
import Privacidad from './pages/Privacidad'
import Cookies from './pages/Cookies'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
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
    <div className="min-h-screen bg-green-deep text-white font-body overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </div>
  )
}

export default App
