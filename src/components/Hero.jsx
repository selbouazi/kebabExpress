import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useOpenStatus } from '../context/OpenStatusContext'
import { contactInfo } from '../data/restaurantData'
import { scheduleData } from '../data/scheduleData'
import { daysMap } from '../data/constants'
import { reviews, totalReviews, averageRating } from '../data/reviewsData'
import { Star, Truck, Timer, MessageCircle } from 'lucide-react'
import { SocialLinks } from './SocialLinks'
import AnimatedTitle from './AnimatedTitle'

const curtainVariants = {
  hidden: { scaleX: 1, transformOrigin: 'left' },
  visible: {
    scaleX: 0,
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.15 },
  },
}

const curtainOverlayVariants = {
  hidden: { scaleX: 1, transformOrigin: 'right' },
  visible: {
    scaleX: 0,
    transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.6 },
  },
}

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 1.2 + i * 0.1 },
  }),
}

export default function Hero() {
  const sectionRef = useRef(null)
  const isOpen = useOpenStatus()

  const todayName = Object.keys(daysMap).find(d => daysMap[d] === new Date().getDay())
  const todaySchedule = todayName ? scheduleData[todayName] : null

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/og-image.jpg')", y: bgY, scale: bgScale }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10, 8, 7, 0.85) 0%, rgba(10, 8, 7, 0.45) 40%, rgba(10, 8, 7, 0.55) 62%, rgba(10, 8, 7, 0.92) 100%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(193, 80, 46, 0.08), transparent 50%, rgba(26, 20, 18, 0.4))',
        }} />
      </div>

      <motion.div
        className="absolute inset-0 bg-charcoal z-10"
        variants={curtainVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-charcoal-light to-charcoal z-10"
        variants={curtainOverlayVariants}
        initial="hidden"
        animate="visible"
      />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto w-full">
        <motion.div
          custom={0}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
        >
          <video
            autoPlay muted playsInline
            aria-hidden="true"
            tabIndex={-1}
            className="h-20 sm:h-28 lg:h-36 w-auto mx-auto mb-4 sm:mb-6"
            style={{ filter: 'drop-shadow(4px 4px 0 rgba(0,0,0,0.3))' }}
          >
            <source src="/hero-logo.webm" type="video/webm" />
          </video>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display leading-none tracking-wide drop-shadow-[3px_3px_0_rgba(0,0,0,0.6)] mb-4 sm:mb-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <AnimatedTitle text="EXPRESS" color="text-white" />
          <AnimatedTitle text="KEBAB" color="text-gold" />
        </h1>

        <motion.p
          custom={1}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="text-sm sm:text-base md:text-lg text-white/85 font-body max-w-xl mx-auto mb-6 sm:mb-8 font-light tracking-wide px-2"
        >
          El auténtico sabor turco. Pollo, ternera, mixto, pizzas, menú infantil. Domicilio gratis.
        </motion.p>

        <motion.div
          custom={2}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 border border-gold/20"
        >
          <span className={`w-2 h-2.5 sm:w-2.5 sm:h-2.5 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
          <span className={`font-body text-tiny sm:text-xs uppercase tracking-widest font-medium ${isOpen ? 'text-green-300' : 'text-red-300'}`}>
            {isOpen ? `Abierto · hasta las ${todaySchedule?.close || '00:00'}` : 'Cerrado ahora'}
          </span>
        </motion.div>

        <motion.div
          custom={3}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6"
        >
          <motion.a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary w-full sm:w-auto px-10 py-4 text-base"
          >
            <MessageCircle size={20} />
            Pide por WhatsApp
          </motion.a>
          <motion.button
            onClick={() => scrollTo('#menu')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-secondary w-full sm:w-auto px-10 py-4 text-base"
          >
            Ver menú completo
          </motion.button>
        </motion.div>

        <motion.div
          custom={4}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gold/20 text-xs text-cream/80">
            <Truck size={13} className="text-gold" />
            Domicilio gratis
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gold/20 text-xs text-cream/80">
            <Timer size={13} className="text-gold" />
            Entrega en 20–30 min
          </span>
        </motion.div>

        <motion.div
          custom={5}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 text-gold mb-6"
        >
          <Star size={20} className="fill-gold" />
          <span className="text-white font-semibold text-lg">{averageRating}</span>
          <span className="text-white/60 text-sm font-light">— {totalReviews} reseñas en Google</span>
        </motion.div>

        <motion.div
          custom={6}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-6"
        >
          {reviews.slice(0, 3).map((r, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-gold/20 rounded p-3 text-left"
            >
              <div className="flex items-center gap-0.5 mb-1">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={10} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-white/60 text-tiny leading-relaxed italic line-clamp-2">&ldquo;{r.text}&rdquo;</p>
              <p className="text-gold font-semibold text-tiny uppercase mt-1 tracking-wide">{r.name}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          custom={7}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4"
        >
          <SocialLinks size="sm" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30"
        style={{
          borderLeft: '50vw solid transparent',
          borderRight: '50vw solid transparent',
          borderBottom: '40px solid #1A1412',
        }}
      />
    </section>
  )
}
