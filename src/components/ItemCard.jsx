import { motion } from 'framer-motion'
import { UtensilsCrossed, Flame, Leaf } from 'lucide-react'
import { allergenLabels } from '../data/menuData'
import TiltCard from './TiltCard'

const tagStyles = {
  vegetariano: 'bg-green-brand/15 text-green-light ring-green-brand/30',
  picante: 'bg-paprika/10 text-paprika ring-paprika/20',
}

const tagIcons = {
  vegetariano: <Leaf size={9} />,
  picante: <Flame size={9} />,
}

export default function ItemCard({ item, i, featured = false, fallbackIcon }) {
  const Icon = fallbackIcon || UtensilsCrossed

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: Math.min(i * 0.04, 0.4) }}
      className={`group ${featured ? 'h-full' : ''}`}
    >
      <TiltCard tiltDegree={featured ? 5 : 10} className={`${featured ? 'h-full' : ''}`}>
        <div className={`glass-card rounded overflow-hidden flex flex-col ${featured ? 'h-full' : ''}`}>
          <div
            className={`relative overflow-hidden flex items-center justify-center ${
              featured ? 'flex-1 min-h-[220px]' : 'aspect-[4/3]'
            }`}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 noise-bg bg-gradient-to-br from-charcoal-light to-charcoal/80 flex flex-col items-center justify-center gap-2">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 30%, rgba(244, 196, 48, 0.08), transparent 60%)',
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -6 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="flex items-center justify-center"
                  style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}
                >
                  <Icon size={featured ? 76 : 48} className="text-cream-muted/15 group-hover:text-saffron/25 transition-colors duration-500" />
                </motion.div>
                {featured && (
                  <span className="text-nano uppercase tracking-[0.25em] text-cream-muted/25 font-medium" style={{ transform: 'translateZ(20px)' }}>
                    Foto próximamente
                  </span>
                )}
              </div>
            )}

            <motion.div
              className="absolute inset-0 bg-gradient-to-tl from-paprika/5 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
            {item.image && (
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/5 to-charcoal/20" />
            )}

            <span
              className={`absolute top-3 right-3 bg-saffron text-charcoal font-bold rounded shadow-lg z-10 ${
                featured ? 'text-lg px-3.5 py-1.5' : 'text-base px-2.5 py-1'
              }`}
              style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
            >
              {item.price.toFixed(2).replace('.', ',')}€
            </span>

            {item.isBestseller && (
              <span
                className={`absolute top-3 left-3 text-cream font-bold rounded shadow-lg flex items-center gap-1 z-10 bg-paprika ${
                  featured ? 'text-xs px-3 py-1.5' : 'text-xs px-2.5 py-1'
                }`}
                style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
              >
                <Flame size={featured ? 14 : 12} />
                {featured ? 'Más vendido' : 'Más vendido'}
              </span>
            )}
          </div>

          <div className={`relative ${featured ? 'p-5' : 'p-4'}`} style={{ transformStyle: 'preserve-3d', transform: 'translateZ(15px)' }}>
            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-paprika/30 to-transparent" />
            <h3 className={`font-semibold text-cream uppercase tracking-wide ${featured ? 'text-lg' : 'text-sm'}`}>{item.name}</h3>
            {item.desc && <p className={`text-cream-muted/40 font-light mt-0.5 ${featured ? 'text-sm' : 'text-xs'}`}>{item.desc}</p>}
            {item.tags?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-tiny font-medium uppercase tracking-wider ring-1 ${tagStyles[tag] || 'bg-white/5 text-cream-muted/60 ring-white/10'}`}
                  >
                    {tagIcons[tag]}
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {item.allergens?.length > 0 && (
              <div className="flex items-center gap-1.5 mt-2 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                {item.allergens.map((a) => (
                  <span key={a} className="text-xs leading-none" title={a}>{allergenLabels[a] || a}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}
