import useOpenStatus from '../hooks/useOpenStatus'
import { Phone, ChevronDown } from 'lucide-react'

export default function Hero() {
  const isOpen = useOpenStatus()

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/imagenPredeterminada.webp"
          alt="Kebab Express"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C0F0A]/70 via-[#1C0F0A]/50 to-[#1C0F0A]/90" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-[#6B8F6B] animate-pulse' : 'bg-red-500'}`} />
          <span className={`text-sm font-medium ${isOpen ? 'text-[#6B8F6B]' : 'text-red-400'}`}>
            {isOpen ? 'Abierto ahora' : 'Cerrado ahora'}
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white font-heading leading-tight mb-4">
          Kebab
          <span className="text-[#D94A2B]">Express</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light mb-3 max-w-2xl mx-auto">
          Auténtico sabor pakistaní
        </p>
        <p className="text-base sm:text-lg text-white/60 font-light mb-10 max-w-xl mx-auto">
          Ingredientes frescos · Recetas tradicionales · Servicio rápido
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('#menu')}
            className="w-full sm:w-auto px-8 py-3.5 border-2 border-white/30 text-white rounded-full text-base font-semibold hover:bg-white/10 transition-all duration-200"
          >
            Ver Menú
          </button>
          <a
            href="https://wa.me/34XXXXXXXXX?text=¡Hola!%20Quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D94A2B] text-white rounded-full text-base font-semibold hover:bg-[#c03d1f] transition-all duration-200 shadow-lg shadow-[#D94A2B]/30"
          >
            <Phone size={18} />
            Pide por WhatsApp
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
