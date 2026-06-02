import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Instagram, Music2 } from 'lucide-react'
import { SOCIAL_LINKS } from '../../lib/data'
import { scrollToSection } from '../../lib/utils'

const NAV_LINKS = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Modalidades', id: 'modalidades' },
  { label: 'Conquistas', id: 'conquistas' },
  { label: 'Eventos', id: 'eventos' },
  { label: 'Bateria', id: 'bateria' },
  { label: 'Loja', id: 'loja' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id: string) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-400/95 backdrop-blur-md border-b border-white/5 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center group"
          >
            <span className="logo-text-shimmer text-base">
              AAADPUCPR
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-gray-300 hover:text-gold-500 font-inter font-medium text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold-500 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold-500 transition-colors duration-200"
              aria-label="TikTok"
            >
              <Music2 size={18} />
            </a>
            <button
              onClick={() => scrollToSection('socios')}
              className="btn-primary text-sm py-2 px-5 font-bebas tracking-wider text-base"
            >
              Seja Sócio
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-dark-500/98 backdrop-blur-lg flex flex-col justify-center items-center gap-6 lg:hidden"
          >
            <span className="logo-text-shimmer text-2xl mb-2">
              AAADPUCPR
            </span>
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(link.id)}
                className="font-bebas text-4xl text-white hover:text-gold-500 transition-colors duration-200 tracking-wider"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.05 }}
              onClick={() => handleNav('socios')}
              className="btn-primary font-bebas tracking-wider text-xl mt-4"
            >
              Seja Sócio
            </motion.button>
            <div className="flex gap-6 mt-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Music2 size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
