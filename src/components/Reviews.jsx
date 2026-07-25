import { Star, ExternalLink, MessageCircle, Quote } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const reviews = [
  {
    name: 'Abami',
    rating: 5,
    text: 'Comida excelente, muy buen sabor. Trabajadores te atienden con una sonrisa y son muy amables. Estoy encantado con el local, muy bien ambiente.',
    date: 'Hace 1 mes',
  },
  {
    name: 'Fran Vaquera',
    rating: 5,
    text: 'De lo mejor que he probado, un sitio donde el servicio es casero, la comida excelente y precio más que ajustado. Lo recomiendo 100%.',
    date: 'Hace 1 mes',
  },
  {
    name: 'Romina Furlan',
    rating: 5,
    text: 'Hacen una comida casera exquisita!!! Atendido por sus dueños!!! Son lo más.',
    date: 'Hace 1 año',
  },
]

const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Express+Kebab+Ctra.+de+Valls+Santa+Oliva'

export default function Reviews() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="reviews" ref={sectionRef} className="relative pt-16 pb-20 sm:pt-20 sm:pb-24 bg-green-brand section-pattern overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 reveal">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/15 mb-4 mx-auto ring-2 ring-gold/10">
            <Star size={30} className="text-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-display text-gold leading-none tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
            RESEÑAS
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="block w-12 h-px bg-gradient-to-r from-transparent to-gold/60" />
            <span className="text-gold/60 text-lg">✦</span>
            <span className="block w-12 h-px bg-gradient-to-l from-transparent to-gold/60" />
          </div>
        </div>

        <div className="text-center mb-10 reveal">
          <div className="inline-flex items-center gap-2 mb-1">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} size={24} className={i <= 4 ? 'fill-gold text-gold' : 'fill-gold/30 text-gold/30'} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-5xl font-display text-gold font-bold drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">4.5</span>
            <div className="text-left">
              <p className="text-white/70 font-body text-sm font-medium">Excelente</p>
              <p className="text-white/40 font-body text-xs">Basado en 203 reseñas de Google</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-xl p-6 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={13} className="fill-gold text-gold" />
                  ))}
                </div>
                <Quote size={16} className="text-gold/20 group-hover:text-gold/40 transition-colors" />
              </div>
              <div className="relative">
                <span className="absolute -top-1 -left-1 text-gold/10 text-4xl font-serif leading-none">&ldquo;</span>
                <p className="text-white/65 font-body text-xs leading-relaxed italic pl-4">
                  {r.text}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                <p className="text-gold font-semibold text-xs uppercase tracking-wider">{r.name}</p>
                <span className="text-white/30 text-[10px]">{r.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 text-gold/80 font-medium text-sm uppercase tracking-wider rounded-full hover:bg-gold/10 hover:text-gold hover:border-gold/60 transition-all"
          >
            <ExternalLink size={15} />
            Ver todas en Google
          </a>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-green-brand font-semibold text-sm uppercase tracking-wider rounded-full hover:bg-gold-dark transition-all shadow-lg hover:shadow-gold/20 active:scale-95"
          >
            <MessageCircle size={16} />
            Déjanos tu reseña
          </a>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0 rotate-180" />
    </section>
  )
}
