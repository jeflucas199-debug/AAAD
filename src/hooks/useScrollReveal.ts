import { useEffect, useRef } from 'react'
import { useAnimation, useInView } from 'framer-motion'

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref, { once: true, amount: threshold })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return { ref, controls }
}
