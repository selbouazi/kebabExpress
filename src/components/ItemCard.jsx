import { motion } from 'framer-motion'
import { UtensilsCrossed, Flame } from 'lucide-react'
import { allergenLabels } from '../data/menuData'
import TiltCard from './TiltCard'

export default function ItemCard({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.05 }}
      className="group"
    >
      <TiltCard tiltDegree={10}>
        <div className="glass-card rounded overflow-hidden">
          <div className="aspect-[4/3] bg-gradient-to-br from-charcoal-light to-charcoal/80 flex items-center justify-center relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-tl from-paprika/5 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}
            >
              <UtensilsCrossed size={48} className="text-cream-muted/10 group-hover:text-saffron/20 transition-colors duration-500" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
            <span
              className="absolute top-3 right-3 bg-saffron text-charcoal font-bold text-base px-2.5 py-1 rounded shadow-lg z-10"
              style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
            >
              {item.price.toFixed(2).replace('.', ',')}€
            </span>
            {item.isBestseller && (
              <span
                className="absolute top-3 left-3 text-cream font-bold text-xs px-2.5 py-1 rounded shadow-lg flex items-center gap-1 z-10"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(20px)',
                  backgroundColor: '#C1502E',
                }}
              >
                <Flame size={12} /> Más vendido
              </span>
            )}
          </div>
          <div
            className="p-4 relative"
            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(15px)' }}
          >
            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-paprika/30 to-transparent" />
            <h3 className="text-sm font-semibold text-cream uppercase tracking-wide">{item.name}</h3>
            {item.desc && <p className="text-cream-muted/40 font-light text-xs mt-0.5">{item.desc}</p>}
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
