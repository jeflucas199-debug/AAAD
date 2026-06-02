import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  highlight?: string
  subtitle?: string
  centered?: boolean
}

export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <div ref={ref} className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-gold-500 font-inter font-semibold text-sm tracking-[0.3em] uppercase mb-4 block"
        >
          {eyebrow}
        </motion.span>
      )}
      <div style={{ overflow: 'hidden', paddingBottom: '0.06em' }} className="mb-4">
        <motion.h2
          initial={{ y: '105%', opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white leading-none hover-glow cursor-default transition-all duration-300 group"
        >
          {title}{' '}
          {highlight && (
            <span className="text-gradient-gold group-hover:opacity-90 transition-opacity duration-300">
              {highlight}
            </span>
          )}
        </motion.h2>
      </div>
      {centered && (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
          style={{ transformOrigin: 'center' }}
          className="gold-line mx-auto mb-6"
        />
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
