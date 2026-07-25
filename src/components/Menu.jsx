import { useState } from 'react'
import { UtensilsCrossed, Percent, Flame, Star } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { menuCategories, allergenLabels, extras, offers } from '../data/menuData'

const tabIcons = ['🍽️', '🥙', '🍕', '🥗', '🥤']

function ItemCard({ item, i }) {
  return (
    <div
      className="glass-card rounded overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl group"
      style={{ animationDelay: `${i * 0.04}s` }}
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-green-dark to-green-brand/80 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <UtensilsCrossed size={48} className="text-gold/15 group-hover:text-gold/25 transition-all duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-card/40 to-transparent" />
        <span className="absolute top-3 right-3 bg-gold text-green-brand font-bold text-base px-2.5 py-1 rounded shadow-lg z-10">
          {item.price.toFixed(2).replace('.', ',')}€
        </span>
        {item.isBestseller && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-red-cola to-red-500 text-white font-bold text-xs px-2.5 py-1 rounded shadow-lg flex items-center gap-1 z-10 animate-pulse">
            <Flame size={12} /> Más vendido
          </span>
        )}
      </div>
      <div className="p-4 relative">
        <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <h3 className="text-sm font-semibold text-white uppercase tracking-wide">{item.name}</h3>
        {item.desc && <p className="text-white/45 font-light text-xs mt-0.5">{item.desc}</p>}
        {item.allergens?.length > 0 && (
          <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-white/5">
            {item.allergens.map((a) => (
              <span key={a} className="text-xs leading-none" title={a}>{allergenLabels[a] || a}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useScrollAnimation()
  const current = menuCategories[activeTab]

  return (
    <section id="menu" ref={sectionRef} className="relative pt-16 pb-20 sm:pt-20 sm:pb-24 bg-green-dark section-pattern overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 reveal">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/15 mb-4 mx-auto ring-2 ring-gold/10">
            <UtensilsCrossed size={30} className="text-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-display text-gold leading-none tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
            MENÚ
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="block w-12 h-px bg-gradient-to-r from-transparent to-gold/60" />
            <span className="text-gold/60 text-lg">✦</span>
            <span className="block w-12 h-px bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          <p className="text-white/50 font-body text-sm mt-3 tracking-wide max-w-md mx-auto">Kebabs, pizzas, entrantes y bebidas — todo casero</p>
        </div>

        {offers.length > 0 && (
          <div className="max-w-md mx-auto mb-10 reveal">
            <div className="relative bg-gradient-to-r from-gold via-amber-400 to-gold-dark rounded-xl p-4 sm:p-5 text-center shadow-xl shadow-gold/20 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_60%)]" />
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Percent size={16} className="text-red-cola" />
                  <span className="text-green-brand font-display text-xs uppercase tracking-widest font-bold">Oferta destacada</span>
                  <Percent size={16} className="text-red-cola" />
                </div>
                {offers.map((o) => (
                  <div key={o.id} className="flex items-center justify-center gap-3">
                    <span className="text-green-dark font-bold text-xl">{o.title}</span>
                    <span className="text-3xl font-black text-red-cola drop-shadow-[1px_1px_0_rgba(0,0,0,0.15)]">
                      {o.price.toFixed(2).replace('.', ',')}€
                    </span>
                  </div>
                ))}
                {offers[0]?.desc && <p className="text-green-dark/70 text-xs mt-0.5">{offers[0].desc}</p>}
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal reveal-delay-1">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              className={`relative px-5 py-2.5 font-body text-xs uppercase tracking-widest rounded-full transition-all duration-300 ${
                activeTab === i
                  ? 'bg-gold text-green-brand font-semibold shadow-lg shadow-gold/20 scale-105'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80 border border-white/5'
              }`}
            >
              <span className="mr-1.5">{tabIcons[i]}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div className="overflow-hidden">
          <div
            key={activeTab}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fadeIn"
          >
            {current?.items.map((item, i) => (
              <ItemCard key={item.id} item={item} i={i} />
            ))}
          </div>
        </div>

        {extras.length > 0 && (
          <div className="mt-10 max-w-lg mx-auto reveal">
            <div className="glass-card rounded-xl p-5 shadow-lg">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="block w-8 h-px bg-gradient-to-r from-transparent to-gold/40" />
                <h3 className="text-xs font-semibold text-gold uppercase tracking-widest">Suplementos y extras</h3>
                <span className="block w-8 h-px bg-gradient-to-l from-transparent to-gold/40" />
              </div>
              <div className="divide-y divide-white/5">
                {extras.map((e) => (
                  <div key={e.id} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-white/75 text-xs font-medium truncate">{e.name}</span>
                      {e.allergens?.length > 0 && (
                        <span className="text-[10px] shrink-0">{e.allergens.map((a) => allergenLabels[a]).join('')}</span>
                      )}
                    </div>
                    <span className="text-gold font-bold text-sm whitespace-nowrap ml-2">
                      {e.price.toFixed(2).replace('.', ',')}€
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0 rotate-180" />
    </section>
  )
}
