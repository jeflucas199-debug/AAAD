import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = (target / duration) * 16
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="font-bebas text-5xl md:text-6xl text-gradient-gold">
      {count}{suffix}
    </span>
  )
}

const STATS = [
  { label: 'Anos de História', value: 31, suffix: '+' },
  { label: 'Modalidades', value: 12, suffix: '' },
  { label: 'Títulos', value: 5, suffix: '+' },
  { label: 'Membros Ativos', value: 200, suffix: '+' },
]

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-dark-500 relative overflow-hidden">

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Desde 1994"
          title="O Touro Loko"
          highlight="Tem História"
          subtitle="Fundada em 1994, a AAADPUCPR é a Associação Atlética Acadêmica de Direito da PUCPR. Mais de três décadas representando o curso com garra, determinação e muito orgulho."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 text-center card-hover">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-gray-500 text-sm font-inter mt-2 tracking-wide">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
