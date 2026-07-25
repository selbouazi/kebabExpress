import { useState } from 'react'
import { Pizza } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { pizzaMenu } from '../data/menuData'

export default function PizzaMenu() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRef = useScrollAnimation()
  const current = pizzaMenu.sections[activeSection]

  return (
    <section id="pizza" ref={sectionRef} className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-green-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 reveal">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/20 mb-4 mx-auto">
            <Pizza size={28} className="text-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-display text-gold leading-none tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
            MENÚ PIZZA
          </h2>
          <p className="text-white/60 font-body text-sm mt-2 tracking-wide">Pizzas artesanas, menús combinados y bebidas</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8 reveal reveal-delay-1">
          {pizzaMenu.sections.map((section, i) => (
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

        <div className="max-w-3xl mx-auto">
          <div className={activeSection === 1 ? 'grid sm:grid-cols-2 gap-3' : 'space-y-3'}>
            {current?.items.map((item, i) => (
              <div
                key={item.id}
                className="reveal bg-gradient-to-b from-green-card to-green-dark/90 rounded overflow-hidden border border-gold/15 hover:border-gold/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg shadow-sm"
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <div className="p-3.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-7 h-7 rounded-full bg-gold/20 text-gold font-bold text-xs flex items-center justify-center flex-shrink-0 border border-gold/30">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-white uppercase tracking-wide truncate">
                        {item.name}
                      </h3>
                      {item.desc && (
                        <p className="text-white/45 font-light text-xs truncate">{item.desc}</p>
                      )}
                    </div>
                  </div>
                  <span className="text-lg font-bold text-gold whitespace-nowrap flex-shrink-0 drop-shadow-[1px_1px_0_rgba(0,0,0,0.2)]">
                    {item.price.toFixed(2).replace('.', ',')}€
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
