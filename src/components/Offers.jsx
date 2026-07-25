import { Percent, Flame, Star } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { offers } from '../data/menuData'

export default function Offers() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="offers" ref={sectionRef} className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-green-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-10 reveal">
          <Percent size={24} className="text-gold" />
          <h2 className="text-4xl sm:text-5xl font-display text-gold leading-none tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
            OFERTAS
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {offers.map((offer, i) => (
            <div
              key={offer.id}
              className={`reveal rounded overflow-hidden transition-all duration-300 ${
                offer.highlight
                  ? 'bg-gradient-to-b from-gold to-gold-dark text-green-brand shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 sm:hover:scale-[1.03]'
                  : 'bg-gradient-to-b from-green-card to-green-dark/80 text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 border border-gold/20'
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {offer.highlight ? (
                        <Flame size={18} className="text-red-cola flex-shrink-0" />
                      ) : (
                        <Star size={14} className="text-gold flex-shrink-0" />
                      )}
                      <h3 className={`text-lg font-semibold uppercase tracking-wide truncate ${offer.highlight ? 'text-green-dark' : 'text-white'}`}>
                        {offer.title}
                      </h3>
                    </div>
                    {offer.desc && (
                      <p className={`mt-0.5 text-sm font-light ${offer.highlight ? 'text-green-dark/70' : 'text-white/55'}`}>
                        {offer.desc}
                      </p>
                    )}
                  </div>
                  <span className={`text-3xl font-bold leading-none whitespace-nowrap drop-shadow-[1px_1px_0_rgba(0,0,0,0.2)] ${
                    offer.highlight ? 'text-red-cola' : 'text-gold'
                  }`}>
                    {offer.price.toFixed(2).replace('.', ',')}€
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
