import useOpenStatus from '../hooks/useOpenStatus'
import { contactInfo } from '../data/restaurantData'
import { Star } from 'lucide-react'

const reviewPreviews = [
  { name: 'Abami', rating: 5, text: 'Comida excelente, muy buen sabor. Trabajadores te atienden con una sonrisa.' },
  { name: 'Fran Vaquera', rating: 5, text: 'De lo mejor que he probado, servicio casero, comida excelente y precio ajustado.' },
  { name: 'Romina Furlan', rating: 5, text: 'Comida casera exquisita!!! Atendido por sus dueños. Son lo más.' },
]

const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Express+Kebab+Ctra.+de+Valls+Santa+Oliva'

export default function Hero() {
  const isOpen = useOpenStatus()

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-green-brand overflow-hidden pt-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/og-image.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-green-brand/70 via-green-brand/50 to-green-brand/80" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
        <img
          src="/logo.png"
          alt="Express Kebab"
          className="h-20 sm:h-28 lg:h-36 w-auto mx-auto mb-4 sm:mb-6 drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
        />

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display text-white leading-none tracking-wide drop-shadow-[3px_3px_0_rgba(0,0,0,0.6)] mb-1">
          EXPRESS
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display text-gold leading-none tracking-wide drop-shadow-[3px_3px_0_rgba(0,0,0,0.6)] mb-4 sm:mb-6">
          KEBAB
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white/85 font-body max-w-xl mx-auto mb-6 sm:mb-8 font-light tracking-wide px-2">
          El auténtico sabor turco. Pollo, ternera, mixto, pizzas, menú infantil. Domicilio gratis.
        </p>

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-8 sm:mb-10 border border-gold/20">
          <span className={`w-2 h-2.5 sm:w-2.5 sm:h-2.5 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
          <span className={`font-body text-[10px] sm:text-xs uppercase tracking-widest font-medium ${isOpen ? 'text-green-300' : 'text-red-300'}`}>
            {isOpen ? 'Abierto ahora' : 'Cerrado ahora'}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
          <button
            onClick={() => scrollTo('#menu')}
            className="w-full sm:w-auto px-10 py-4 bg-gold text-green-brand font-semibold text-lg uppercase tracking-wider rounded hover:bg-gold-dark transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Ver menú
          </button>
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 border-2 border-gold text-gold font-semibold text-lg uppercase tracking-wider rounded hover:bg-gold hover:text-green-brand transition-all"
          >
            Pide por WhatsApp
          </a>
        </div>

        <div className="inline-flex items-center gap-2 text-gold mb-6">
          <Star size={20} className="fill-gold" />
          <span className="text-white font-semibold text-lg">4.5</span>
          <span className="text-white/60 text-sm font-light">— 203 reseñas en Google</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-6">
          {reviewPreviews.map((r, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-gold/20 rounded p-3 text-left"
            >
              <div className="flex items-center gap-0.5 mb-1">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={10} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-white/60 text-[10px] leading-relaxed italic line-clamp-2">&ldquo;{r.text}&rdquo;</p>
              <p className="text-gold font-semibold text-[10px] uppercase mt-1 tracking-wide">{r.name}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-gold transition-colors"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href={contactInfo.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-gold transition-colors"
            aria-label="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-20"
        style={{
          borderLeft: '50vw solid transparent',
          borderRight: '50vw solid transparent',
          borderBottom: '40px solid #12472B',
        }}
      />
    </section>
  )
}
