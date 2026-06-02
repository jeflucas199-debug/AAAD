import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function SectionDivider() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scaleX: 0.4 }}
      animate={inView ? { opacity: 1, scaleX: 1 } : {}}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      className="mx-8 md:mx-16 pointer-events-none"
      style={{
        height: '1px',
        background:
          'linear-gradient(to right, transparent, rgba(212,192,18,0.18) 25%, rgba(212,192,18,0.28) 50%, rgba(212,192,18,0.18) 75%, transparent)',
        transformOrigin: 'center',
      }}
    />
  )
}
