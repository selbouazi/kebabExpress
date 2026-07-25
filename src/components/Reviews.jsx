import { useRef } from 'react'
import { Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const reviews = [
  {
    name: 'Laura G.',
    rating: 5,
    text: 'El mejor kebab que he probado fuera de Pakistán. La carne está increíblemente jugosa y las especias son auténticas.',
  },
  {
    name: 'Carlos M.',
    rating: 5,
    text: 'Pedimos el menú familiar y fue todo un acierto. Rápido, bien empaquetado y cantidad generosa.',
  },
  {
    name: 'Aisha K.',
    rating: 5,
    text: 'Por fin un sitio con auténtico sabor pakistaní. El cordero es espectacular y el mango lassi de otro nivel.',
  },
  {
    name: 'Miguel R.',
    rating: 4,
    text: 'Excelente relación calidad-precio. El servicio es rápido y el personal muy amable.',
  },
]

export default function Reviews() {
  const sectionRef = useScrollAnimation()
  const scrollRef = useRef(null)
  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  return (
    <section id="reviews" ref={sectionRef} className="relative py-32 lg:py-40 bg-champagne overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 reveal">
          <div>
            <span className="text-cinnabar text-xs tracking-[0.3em] uppercase font-semibold">
              Reseñas
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-ebony font-heading leading-[0.95] mt-6">
              Lo que
              <br />
              <span className="italic font-normal">opinan</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-3xl font-bold text-ebony font-heading">{avg}</span>
            <span className="text-taupe text-xs tracking-wider uppercase">({reviews.length})</span>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-cinnabar hover:text-white transition-all duration-300 hidden lg:flex"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-cinnabar hover:text-white transition-all duration-300 hidden lg:flex"
          >
            <ChevronRight size={16} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className="reveal min-w-[340px] lg:min-w-[420px] bg-white rounded-sm p-8 lg:p-10 border border-ebony/[0.04] snap-start flex-shrink-0 hover:shadow-2xl transition-all duration-500"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <Quote size={28} className="text-cinnabar/15 mb-6" />
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={j < r.rating ? 'text-gold' : 'text-ebony/10'}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-taupe leading-[1.8] mb-8 text-sm italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-ebony/[0.04]">
                  <div className="w-10 h-10 rounded-full bg-cinnabar/10 flex items-center justify-center text-cinnabar font-bold text-sm font-heading">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ebony">{r.name}</p>
                    <p className="text-[10px] text-taupe tracking-wider uppercase">Cliente verificado</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14 reveal reveal-delay-2">
          <a
            href="https://search.google.com/local/reviews?placeid=PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3.5 border border-ebony/20 text-ebony text-xs tracking-[0.2em] uppercase font-medium hover:bg-ebony hover:text-white transition-all duration-500"
          >
            <ExternalLink size={12} className="group-hover:rotate-12 transition-transform" />
            Ver todas
          </a>
          <a
            href="https://search.google.com/local/writereview?placeid=PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-cinnabar text-white text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#a8321a] transition-all duration-500"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Déjanos tu reseña
          </a>
        </div>
      </div>
    </section>
  )
}
