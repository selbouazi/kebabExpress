import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Offers from './components/Offers'
import KebabMenu from './components/KebabMenu'
import PizzaMenu from './components/PizzaMenu'
import KidsMenu from './components/KidsMenu'
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
        <Offers />
        <KebabMenu />
        <PizzaMenu />
        <KidsMenu />
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
      </Routes>
    </div>
  )
}

export default App
