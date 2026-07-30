import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UtensilsCrossed, Percent, Sandwich, Pizza, Salad, Wine } from 'lucide-react'
import { menuCategories, allergenLabels, extras, offers } from '../data/menuData'
import SectionLayout from './SectionLayout'
import ItemCard from './ItemCard'
import Marquee from './Marquee'

const tabIcons = [
  <UtensilsCrossed size={14} className="inline" />,
  <Sandwich size={14} className="inline" />,
  <Pizza size={14} className="inline" />,
  <Salad size={14} className="inline" />,
  <Wine size={14} className="inline" />,
]

const marqueeItems = menuCategories
  .flatMap((cat) => cat.items)
  .filter((item) => item.isBestseller)
  .map((item) => `${item.name} — ${item.price.toFixed(2).replace('.', ',')}€`)

export default function Menu() {
  const [activeTab, setActiveTab] = useState(0)
  const current = menuCategories[activeTab]
  const [todayOffers, setTodayOffers] = useState([])

  useEffect(() => {
    setTodayOffers(offers.filter(o => o.dayOfWeek === undefined || o.dayOfWeek === new Date().getDay()))
  }, [])

  return (
    <SectionLayout
      id="menu"
      icon={UtensilsCrossed}
      title="MENÚ"
      subtitle="Kebabs, pizzas, entrantes y bebidas — todo casero"
      bgColor="bg-charcoal"
    >
      <Marquee
        items={marqueeItems}
        speed={30}
        direction="left"
        className="mb-8 py-3 border-y border-gold/10"
      />

      <AnimatePresence mode="wait">
        {todayOffers.length > 0 && (
          <motion.div
            key="offers"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-md mx-auto mb-10"
          >
            <div className="relative bg-gradient-to-r from-saffron via-amber-500 to-saffron/80 rounded-xl p-4 sm:p-5 text-center overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(212, 160, 23, 0.15)' }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_60%)]" />
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Percent size={16} className="text-paprika" />
                  <span className="text-charcoal font-display text-xs uppercase tracking-widest font-bold">Oferta destacada</span>
                  <Percent size={16} className="text-paprika" />
                </div>
                {offers.map((o) => (
                  <div key={o.id} className="flex items-center justify-center gap-3">
                    <span className="text-charcoal font-bold text-xl">{o.title}</span>
                    <span className="text-3xl font-black text-paprika drop-shadow-[1px_1px_0_rgba(0,0,0,0.15)]">
                      {o.price.toFixed(2).replace('.', ',')}€
                    </span>
                  </div>
                ))}
                {offers[0]?.desc && <p className="text-charcoal/60 text-xs mt-0.5">{offers[0].desc}</p>}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {menuCategories.map((cat, i) => (
          <button
            key={cat.name}
            onClick={() => setActiveTab(i)}
            className={`relative px-5 py-2.5 font-body text-xs uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer ${
              activeTab === i
                ? 'bg-paprika text-cream font-semibold scale-105'
                : 'bg-white/5 text-cream-muted/50 hover:bg-white/10 hover:text-cream/80 border border-white/5'
            }`}
          >
            <span className="mr-1.5">{tabIcons[i]}</span>
            {cat.name}
          </button>
        ))}
      </motion.div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {current?.items.map((item, i) => (
              <ItemCard key={item.id} item={item} i={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {extras.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="mt-10 max-w-lg mx-auto"
        >
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
        </motion.div>
      )}
    </SectionLayout>
  )
}
