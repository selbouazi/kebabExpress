import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Star, ExternalLink, MessageCircle, Quote } from 'lucide-react'
import { reviews, totalReviews, averageRating, googleMapsUrl } from '../data/reviewsData'
import SectionLayout from './SectionLayout'
import CountUp from './CountUp'

const avatarPalette = [
  { bg: 'rgba(244, 196, 48, 0.12)', fg: '#F4C430', ring: 'rgba(244, 196, 48, 0.3)' },
  { bg: 'rgba(193, 80, 46, 0.14)', fg: '#E07A4F', ring: 'rgba(193, 80, 46, 0.3)' },
  { bg: 'rgba(58, 138, 92, 0.16)', fg: '#5BB27E', ring: 'rgba(58, 138, 92, 0.35)' },
  { bg: 'rgba(212, 160, 23, 0.14)', fg: '#D4A017', ring: 'rgba(212, 160, 23, 0.3)' },
]

const initialsOf = (name) =>
  name.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()

export default function Reviews() {
  const sectionRef = useRef(null)
  const numberRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.4, 1.3, 1.3, 0.8, 0.4])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -40])
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])

  return (
    <SectionLayout ref={sectionRef} id="reviews" icon={Star} title="RESEÑAS" bgColor="bg-charcoal-light">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 mb-1">
          {Array.from({ length: Math.floor(averageRating) }).map((_, i) => (
            <Star key={i} size={24} className="fill-saffron text-saffron" />
          ))}
          {averageRating % 1 !== 0 && (
            <span className="relative inline-flex">
              <Star size={24} className="fill-saffron/20 text-saffron/20" />
              <span className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                <Star size={24} className="fill-saffron text-saffron" />
              </span>
            </span>
          )}
          {Array.from({ length: 5 - Math.ceil(averageRating) }).map((_, i) => (
            <Star key={i} size={24} className="fill-saffron/20 text-saffron/20" />
          ))}
        </div>
        <motion.div
          ref={numberRef}
          style={{ scale, y, rotate, opacity }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="flex items-center justify-center gap-3"
        >
          <span className="text-5xl font-display text-gold font-bold drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
            <CountUp to={averageRating} decimals={1} duration={1.5} />
          </span>
          <div className="text-left">
            <p className="text-white/70 font-body text-sm font-medium">Excelente</p>
            <p className="text-white/40 font-body text-xs">Basado en {totalReviews} reseñas de Google</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
          },
        }}
        className="grid sm:grid-cols-3 gap-5 mb-10"
      >
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: 'easeOut' },
              },
            }}
            whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
            className="glass-card rounded-xl p-6 group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={13} className="fill-gold text-gold" />
                ))}
              </div>
              <Quote size={16} className="text-gold/20 group-hover:text-gold/40 transition-colors" />
            </div>
            <div className="relative">
              <span className="absolute -top-1 -left-1 text-gold/10 text-4xl font-serif leading-none">&ldquo;</span>
              <p className="text-white/65 font-body text-xs leading-relaxed italic pl-4">
                {r.text}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-white/5">
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-tiny font-bold uppercase shrink-0 ring-1"
                  style={{
                    backgroundColor: avatarPalette[i % avatarPalette.length].bg,
                    color: avatarPalette[i % avatarPalette.length].fg,
                    borderColor: avatarPalette[i % avatarPalette.length].ring,
                  }}
                >
                  {initialsOf(r.name)}
                </span>
                <p className="text-gold font-semibold text-xs uppercase tracking-wider truncate">{r.name}</p>
              </div>
              <span className="text-white/30 text-tiny shrink-0">{r.date}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary px-6 py-3"
        >
          <ExternalLink size={15} />
          Ver todas en Google
        </a>
        <motion.a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(244, 196, 48, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary px-8 py-3"
        >
          <MessageCircle size={16} />
          Déjanos tu reseña
        </motion.a>
      </motion.div>
    </SectionLayout>
  )
}
