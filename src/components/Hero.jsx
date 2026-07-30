import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useOpenStatus } from '../context/OpenStatusContext'
import { contactInfo } from '../data/restaurantData'
import { scheduleData } from '../data/scheduleData'
import { daysMap } from '../data/constants'
import { reviews, totalReviews, averageRating } from '../data/reviewsData'
import { Star } from 'lucide-react'
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
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center bg-green-dark overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/og-image.jpg')", y: bgY, scale: bgScale }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-green-brand/70 via-green-brand/50 to-green-brand/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
      </div>

      <motion.div
        className="absolute inset-0 bg-green-dark z-10"
        variants={curtainVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-brand to-green-dark z-10"
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
          <motion.img
            src="/logo.svg" width="160" height="160"
            alt="Express Kebab"
            className="h-20 sm:h-28 lg:h-36 w-auto mx-auto mb-4 sm:mb-6 drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
          />
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
          <span className={`font-body text-[10px] sm:text-xs uppercase tracking-widest font-medium ${isOpen ? 'text-green-300' : 'text-red-300'}`}>
            {isOpen ? `Abierto · hasta las ${todaySchedule?.close || '00:00'}` : 'Cerrado ahora'}
          </span>
        </motion.div>

        <motion.div
          custom={3}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8"
        >
          <motion.button
            onClick={() => scrollTo('#menu')}
            whileHover={{ scale: 1.05, backgroundColor: '#D4A824' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 bg-gold text-green-brand font-semibold text-lg uppercase tracking-wider rounded shadow-lg hover:shadow-xl cursor-pointer"
          >
            Ver menú
          </motion.button>
          <motion.a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: '#F4C430', color: '#1B5E3A' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 border-2 border-gold text-gold font-semibold text-lg uppercase tracking-wider rounded"
          >
            Pide por WhatsApp
          </motion.a>
        </motion.div>

        <motion.div
          custom={4}
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
          custom={5}
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
              <p className="text-white/60 text-[10px] leading-relaxed italic line-clamp-2">&ldquo;{r.text}&rdquo;</p>
              <p className="text-gold font-semibold text-[10px] uppercase mt-1 tracking-wide">{r.name}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          custom={6}
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
          borderBottom: '40px solid #12472B',
        }}
      />
    </section>
  )
}
