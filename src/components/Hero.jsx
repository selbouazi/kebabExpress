import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import useOpenStatus from '../hooks/useOpenStatus'
import { contactInfo } from '../data/restaurantData'

const words = ['Pakistán', 'Lahore', 'tradición', 'especias', 'Karachi']

export default function Hero() {
  const isOpen = useOpenStatus()
  const [wordIdx, setWordIdx] = useState(0)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    setTimeout(() => setRevealed(true), 300)

    const interval = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % words.length)
    }, 2800)

    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ebony"
    >
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg"
          alt=""
          className="w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ebony via-ebony/70 to-ebony/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-ebony via-transparent to-ebony/30" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[15%] w-[500px] h-[500px] border border-white/[0.02] rounded-full" />
        <div className="absolute bottom-1/4 right-[10%] w-[300px] h-[300px] border border-cinnabar/[0.03] rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-[200px] h-[200px] border border-gold/[0.02] rounded-full animate-floatSlow" />

        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cinnabar/30 rounded-full"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${60 + (i * 4)}%`,
              animation: `ember ${3 + (i * 0.5)}s ease-out ${i * 0.4}s infinite`,
            }}
          />
        ))}

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cinnabar/20 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div
          className={`inline-flex items-center gap-3 bg-white/[0.04] backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-white/[0.06] transition-all duration-1000 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="relative flex w-2 h-2">
            <span
              className={`absolute inset-0 rounded-full ${isOpen ? 'bg-green-400' : 'bg-red-500'}`}
            />
            {isOpen && (
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
            )}
          </span>
          <span className={`text-xs tracking-[0.15em] uppercase font-medium ${isOpen ? 'text-green-400' : 'text-red-400'}`}>
            {isOpen ? 'Abierto ahora' : 'Cerrado ahora'}
          </span>
          <span className="w-px h-3 bg-white/[0.08]" />
          <span className="text-white/30 text-xs tracking-wider">{contactInfo.address.street}</span>
        </div>

        <h1
          className={`transition-all duration-1000 delay-200 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold text-white font-heading leading-[0.85] tracking-tight">
            Kebab
            <br />
            <span className="bg-gradient-to-r from-cinnabar via-gold to-cinnabar bg-clip-text text-transparent" style={{ backgroundSize: '200% 100%', animation: 'shimmer 4s ease-in-out infinite' }}>
              Express
            </span>
          </span>
        </h1>

        <div
          className={`h-14 flex items-center justify-center mb-6 transition-all duration-1000 delay-500 ${
            revealed ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-white/40 font-light tracking-wide">
            Auténtico sabor de{' '}
            <span className="text-gold font-medium font-heading italic">
              {words[wordIdx]}
            </span>
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => scrollTo('#menu')}
            className="group relative w-full sm:w-auto px-10 py-4 overflow-hidden rounded-full transition-all duration-500"
          >
            <span className="absolute inset-0 bg-white/[0.06] rounded-full border border-white/[0.1] group-hover:bg-white/[0.1] transition-colors duration-500" />
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: 'inset 0 0 30px rgba(255,255,255,0.05)' }} />
            <span className="relative text-white text-sm tracking-[0.2em] uppercase font-medium">
              Ver Menú
            </span>
          </button>

          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 overflow-hidden rounded-full transition-all duration-500"
          >
            <span className="absolute inset-0 bg-cinnabar rounded-full transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulseGlow" />
            <Phone size={16} className="relative z-10 text-white" />
            <span className="relative z-10 text-white text-sm tracking-[0.2em] uppercase font-semibold">
              Pide por WhatsApp
            </span>
          </a>
        </div>

        <div
          className={`flex items-center justify-center gap-2 mt-16 transition-all duration-1000 delay-[900ms] ${
            revealed ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
          <span className="text-gold text-sm font-medium ml-2">4.8</span>
          <span className="text-white/20 text-xs ml-1">— 32 reseñas en Google</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border border-white/[0.1] flex justify-center pt-2">
          <div className="w-px h-3 bg-white/30 rounded-full animate-scrollIndicator" />
        </div>
      </div>
    </section>
  )
}
