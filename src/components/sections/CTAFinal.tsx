import { motion } from 'framer-motion'
import { Instagram, Music2 } from 'lucide-react'
import { SOCIAL_LINKS } from '../../lib/data'
import { scrollToSection } from '../../lib/utils'
import ScrollReveal from '../ui/ScrollReveal'

export default function CTAFinal() {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-dark-400">

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212,192,18,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212,192,18,0.8) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal delay={0}>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="text-7xl mb-8 block"
          >
            🐂
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-bebas text-6xl md:text-8xl text-white leading-none mb-4">
            O Touro Loko
            <br />
            <span className="text-gradient-gold">Chama Você</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-gray-400 text-lg font-inter leading-relaxed mb-12 max-w-xl mx-auto">
            A AAADPUCPR é bicampeã, tem 30 anos de história e um futuro brilhante pela frente.
            Venha fazer parte dessa trajetória.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              onClick={() => scrollToSection('socios')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary font-bebas tracking-wider text-xl py-5 px-14 shadow-[0_0_50px_rgba(212,192,18,0.25)]"
            >
              Seja Sócio Agora
            </motion.button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex items-center justify-center gap-8">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-gold-500 transition-colors font-inter text-sm"
            >
              <Instagram size={18} />
              Instagram
            </a>
            <span className="w-px h-4 bg-white/10" />
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-gold-500 transition-colors font-inter text-sm"
            >
              <Music2 size={18} />
              TikTok
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
