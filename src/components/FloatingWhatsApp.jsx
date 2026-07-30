import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { contactInfo } from '../data/restaurantData'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={contactInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        boxShadow: [
          '0 0 0 0 rgba(37, 211, 102, 0.4)',
          '0 0 0 12px rgba(37, 211, 102, 0)',
          '0 0 0 0 rgba(37, 211, 102, 0)',
        ],
      }}
      transition={{
        scale: { type: 'spring', stiffness: 400, damping: 20, delay: 1 },
        opacity: { delay: 1 },
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        },
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: '0 0 30px rgba(37, 211, 102, 0.5)',
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 lg:bottom-8 right-4 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl group"
      aria-label="WhatsApp"
    >
      <MessageCircle size={26} className="text-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.15)]" />
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white text-xs whitespace-nowrap px-3 py-1.5 rounded-lg border border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¡Chatea con nosotros!
      </span>
    </motion.a>
  )
}
