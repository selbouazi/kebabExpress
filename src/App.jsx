import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { OpenStatusProvider } from './context/OpenStatusContext'
import FloatingPillNav from './components/FloatingPillNav'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Reviews from './components/Reviews'
import LocationMap from './components/LocationMap'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'
import MobileStickyBar from './components/MobileStickyBar'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ErrorBoundary from './components/ErrorBoundary'
import SmoothScroll from './components/SmoothScroll'

const AvisoLegal = lazy(() => import('./pages/AvisoLegal'))
const Privacidad = lazy(() => import('./pages/Privacidad'))
const Cookies = lazy(() => import('./pages/Cookies'))
const Terminos = lazy(() => import('./pages/Terminos'))

function Home() {
  return (
    <>
      <FloatingPillNav />
      <main id="main-content" className="pb-16 lg:pb-0">
        <Hero />
        <Menu />
        <Reviews />
        <LocationMap />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
      <FloatingWhatsApp />
    </>
  )
}

const loadingFallback = (
  <div className="min-h-screen bg-charcoal flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-paprika border-t-transparent rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <ErrorBoundary>
      <OpenStatusProvider>
        <SmoothScroll>
          <div className="min-h-screen bg-charcoal text-cream font-body overflow-x-hidden">
            <ScrollToTop />
            <Suspense fallback={loadingFallback}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aviso-legal" element={<AvisoLegal />} />
                <Route path="/privacidad" element={<Privacidad />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/terminos" element={<Terminos />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </SmoothScroll>
      </OpenStatusProvider>
    </ErrorBoundary>
  )
}

export default App
