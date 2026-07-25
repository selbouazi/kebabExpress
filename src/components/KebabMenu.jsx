import { useState } from 'react'
import { UtensilsCrossed } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { kebabMenu } from '../data/menuData'

export default function KebabMenu() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRef = useScrollAnimation()
  const current = kebabMenu.sections[activeSection]

  return (
    <section id="kebab" ref={sectionRef} className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-green-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 reveal">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/20 mb-4">
            <UtensilsCrossed size={28} className="text-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-display text-gold leading-none tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
            MENÚ KEBAB
          </h2>
          <p className="text-white/60 font-body text-sm mt-2 tracking-wide">Pollos, ternera, mixtos, falafel y más</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8 reveal reveal-delay-1">
          {kebabMenu.sections.map((section, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`px-4 py-1.5 font-body text-xs uppercase tracking-widest rounded-full transition-all ${
                activeSection === i
                  ? 'bg-gold text-green-brand font-semibold shadow-md'
                  : 'bg-white/8 text-white/60 hover:bg-white/15 hover:text-white'
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {current?.items.map((item, i) => (
            <div
              key={item.id}
              className="reveal bg-gradient-to-b from-green-card to-green-dark/90 rounded overflow-hidden border border-gold/15 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-md"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-green-dark/80 to-green-brand/60 flex items-center justify-center relative">
                <div className="w-full h-full flex items-center justify-center">
                  <UtensilsCrossed size={48} className="text-gold/20" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-card/30 to-transparent" />
                <span className="absolute top-3 right-3 bg-gold text-green-brand font-bold text-base px-2.5 py-1 rounded shadow-lg">
                  {item.price.toFixed(2).replace('.', ',')}€
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                  {item.name}
                </h3>
                {item.desc && (
                  <p className="text-white/50 font-light text-xs mt-0.5">{item.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
