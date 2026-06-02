import { motion } from 'framer-motion'
import { Handshake } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

const SPONSORS = [
  { name: 'OralUnic', logo: '/sponsors/oralunic.png' },
  { name: 'Clínica Bonna Salute', logo: '/sponsors/bonnasalute.png' },
  { name: 'CWBeer', logo: '/sponsors/cwbeer.png' },
  { name: 'Formo', logo: '/sponsors/formo.png' },
]

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="section-padding bg-dark-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Parcerias Estratégicas"
          title="Nossos"
          highlight="Patrocinadores"
          subtitle="Empresas e parceiros que acreditam no potencial da AAADPUCPR e apoiam nossa trajetória."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {SPONSORS.map((sponsor, i) => (
            <ScrollReveal key={sponsor.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl flex items-center justify-center p-6 h-36"
                style={{
                  background: 'rgba(255,255,255,0.96)',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
                }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="glass-gold rounded-2xl p-8 text-center">
            <Handshake size={32} className="text-gold-500 mx-auto mb-4" />
            <h3 className="font-bebas text-2xl text-white tracking-wider mb-2">
              Seja um Patrocinador
            </h3>
            <p className="text-gray-400 text-sm font-inter mb-6 max-w-md mx-auto">
              Associe sua marca à atlética universitária mais vitoriosa de Direito do Paraná.
              Entre em contato pelo nosso Instagram.
            </p>
            <a
              href="https://www.instagram.com/aaadpucpr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-bebas tracking-wider"
            >
              Fale Conosco
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
