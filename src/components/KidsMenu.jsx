import { Cookie } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { kidsMenu } from '../data/menuData'

export default function KidsMenu() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="kids" ref={sectionRef} className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-green-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 reveal">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/20 mb-4 mx-auto">
            <Cookie size={28} className="text-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display text-gold leading-none tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
            MENÚ INFANTIL
          </h2>
          <p className="text-white/60 font-body text-sm mt-2 tracking-wide">Los más pequeños también disfrutan</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {kidsMenu.items.map((item, i) => (
            <div
              key={item.id}
              className="reveal bg-gradient-to-b from-green-card to-green-dark/90 rounded-xl overflow-hidden border border-gold/15 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm"
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              <div className="aspect-square bg-gradient-to-br from-green-dark/70 to-green-brand/60 flex items-center justify-center relative">
                <Cookie size={36} className="text-gold/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-card/20 to-transparent" />
              </div>
              <div className="p-3">
                <h3 className="text-xs font-semibold text-white uppercase tracking-wide leading-tight">{item.name}</h3>
                <span className="text-base font-bold text-gold drop-shadow-[1px_1px_0_rgba(0,0,0,0.2)]">
                  {item.price.toFixed(2).replace('.', ',')}€
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
