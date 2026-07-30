import { motion } from 'framer-motion'

const letterVariants = {
  hidden: {
    opacity: 0,
    y: -60,
    rotateX: -90,
    filter: 'blur(8px)',
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.55,
      ease: [0.215, 0.61, 0.355, 1],
      delay: i * 0.045,
    },
  }),
}

export default function AnimatedTitle({ text, className = '', color = 'text-white' }) {
  const chars = text.split('')

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className={`${color} inline-block`}
          style={{
            perspective: '600px',
            whiteSpace: char === ' ' ? 'pre' : undefined,
            willChange: 'transform, opacity',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}
