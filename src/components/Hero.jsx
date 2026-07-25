import useOpenStatus from '../hooks/useOpenStatus'
import { contactInfo } from '../data/restaurantData'

export default function Hero() {
  const isOpen = useOpenStatus()

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-green-brand overflow-hidden pt-20">
      <div className="absolute inset-0 hero-logo-bg" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <img
          src="/logo.png"
          alt="Express Kebab"
          className="h-28 sm:h-36 w-auto mx-auto mb-6 drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
        />

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display text-white leading-none tracking-wide drop-shadow-[3px_3px_0_rgba(0,0,0,0.6)] mb-1">
          EXPRESS
        </h1>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display text-gold leading-none tracking-wide drop-shadow-[3px_3px_0_rgba(0,0,0,0.6)] mb-6">
          KEBAB
        </h1>

        <p className="text-base sm:text-lg text-white/85 font-body max-w-xl mx-auto mb-8 font-light tracking-wide">
          El auténtico sabor turco. Pollo, ternera, mixto, pizzas, menú infantil. Domicilio gratis.
        </p>

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-10 border border-gold/20">
          <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
          <span className={`font-body text-xs uppercase tracking-widest font-medium ${isOpen ? 'text-green-300' : 'text-red-300'}`}>
            {isOpen ? 'Abierto ahora' : 'Cerrado ahora'}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('#offers')}
            className="w-full sm:w-auto px-10 py-4 bg-gold text-green-brand font-semibold text-lg uppercase tracking-wider rounded hover:bg-gold-dark transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Ver ofertas
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
