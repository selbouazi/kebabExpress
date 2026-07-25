import { useState } from 'react'
import { Star, Flame } from 'lucide-react'
import menuData from '../data/menuData'
import useScrollAnimation from '../hooks/useScrollAnimation'

const allergenMap = {
  gluten: { label: 'Gluten', color: 'bg-yellow-950/40 text-yellow-400 border-yellow-800/40' },
  lacteos: { label: 'Lácteos', color: 'bg-blue-950/40 text-blue-400 border-blue-800/40' },
  sesamo: { label: 'Sésamo', color: 'bg-purple-950/40 text-purple-400 border-purple-800/40' },
  'frutos-secos': { label: 'Frutos secos', color: 'bg-orange-950/40 text-orange-400 border-orange-800/40' },
}

export default function Menu() {
  const [active, setActive] = useState(menuData[0].category)
  const sectionRef = useScrollAnimation()
  const current = menuData.find((m) => m.category === active)

  return (
    <section id="menu" ref={sectionRef} className="relative py-32 lg:py-40 bg-ebony overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cinnabar/[0.02] rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 reveal">
          <span className="text-cinnabar text-xs tracking-[0.3em] uppercase font-semibold">La carta</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-heading leading-[0.95] mt-6">
            Nuestros<br /><span className="italic font-normal">sabores</span>
          </h2>
          <div className="w-12 h-px bg-cinnabar/30 mx-auto mt-8" />
        </div>

        <div className="flex flex-wrap justify-center gap-1 mb-14 reveal reveal-delay-1">
          {menuData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActive(cat.category)}
              className={`relative px-6 py-3 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-500 ${
                active === cat.category ? 'text-white' : 'text-white/30 hover:text-white/60'
              }`}
            >
              {cat.category}
              {active === cat.category && (
                <span className="absolute -bottom-1 left-6 right-6 h-px bg-cinnabar" />
              )}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {current?.items.map((item, i) => (
            <div
              key={item.id}
              className="reveal group bg-coffee/40 rounded-sm overflow-hidden border border-white/[0.04] hover:border-cinnabar/20 transition-all duration-700 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#2A1F18] to-[#1A0F0A] flex items-center justify-center relative overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt=""
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
                {item.isBestSeller && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gold/90 text-ebony px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase shadow-lg z-10">
                    <Flame size={10} /> Top
                  </div>
                )}
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <span className="text-gold font-bold text-lg font-heading tabular-nums whitespace-nowrap">{item.price.toFixed(2)}€</span>
                </div>
                <p className="text-sm text-white/40 leading-relaxed font-light">{item.description}</p>
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  {item.allergens.map((a) => {
                    const info = allergenMap[a]
                    return info ? (
                      <span key={a} className={`text-[9px] px-2 py-0.5 border rounded-full font-medium tracking-wider uppercase ${info.color}`}>{info.label}</span>
                    ) : null
                  })}
                  {item.isBestSeller && (
                    <span className="flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full bg-gold/10 text-gold font-medium tracking-wider uppercase">
                      <Star size={9} /> Más vendido
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
