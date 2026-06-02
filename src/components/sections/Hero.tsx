import { motion } from 'framer-motion'
import { ChevronDown, Instagram, Music2, Trophy } from 'lucide-react'
import { SOCIAL_LINKS } from '../../lib/data'
import { scrollToSection } from '../../lib/utils'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-500"
    >
      {/* Background layers */}

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,192,18,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212,192,18,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [20, -20, 20], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-500/4 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 glass-gold rounded-full px-4 py-2 mb-8"
        >
          <Trophy size={14} className="text-gold-500" />
          <span className="text-gold-500 text-xs font-inter font-semibold tracking-[0.2em] uppercase">
            Bicampeã JJPR 2024 & 2025
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-bebas text-6xl sm:text-7xl md:text-9xl lg:text-[11rem] leading-none text-white tracking-tight mb-2 text-shadow-gold hover-glow cursor-default transition-all duration-300"
        >
          AAAD
          <span className="text-gradient-gold">PUCPR</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-gray-400 text-sm md:text-base font-inter tracking-[0.2em] uppercase mb-6"
        >
          Associação Atlética Acadêmica de Direito · PUCPR · Desde 1994
        </motion.p>

        {/* Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-12"
        >
          <span className="font-bebas text-4xl md:text-6xl text-gradient-gold tracking-[0.15em]">
            VEM SER GIGANTE
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <button
            onClick={() => scrollToSection('socios')}
            className="btn-primary font-bebas tracking-wider text-lg px-10 py-4"
          >
            Seja Sócio
          </button>
          <button
            onClick={() => scrollToSection('sobre')}
            className="btn-secondary font-bebas tracking-wider text-lg px-10 py-4"
          >
            Conheça a Atlética
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center gap-6"
        >
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-gold-500 transition-colors duration-200 text-sm font-inter"
          >
            <Instagram size={16} />
            @aaadpucpr
          </a>
          <span className="w-px h-4 bg-white/10" />
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 hover:text-gold-500 transition-colors duration-200 text-sm font-inter"
          >
            <Music2 size={16} />
            @aaadpucpr
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('sobre')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-gold-500 transition-colors"
      >
        <span className="text-xs font-inter tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-500 to-transparent pointer-events-none" />
    </section>
  )
}
