import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

const variants = {
  hidden: (direction: string) => ({
    opacity: 0,
    y: direction === 'up' ? 52 : direction === 'down' ? -52 : 0,
    x: direction === 'left' ? 52 : direction === 'right' ? -52 : 0,
    filter: 'blur(8px)',
    scale: direction === 'none' ? 1 : 0.96,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: ScrollRevealProps) {
  const { ref, controls } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      custom={direction}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
