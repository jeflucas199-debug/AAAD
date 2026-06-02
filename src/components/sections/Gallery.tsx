import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Instagram, ImageOff } from 'lucide-react'
import { SOCIAL_LINKS } from '../../lib/data'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

const GALLERY_ITEMS = [
  { id: 1, label: 'JJPR 2025 — Bicampeãs', size: 'large' },
  { id: 2, label: 'Treino de Futebol', size: 'small' },
  { id: 3, label: 'Basquete Feminino', size: 'small' },
  { id: 4, label: 'Alçapão Alcoólico', size: 'small' },
  { id: 5, label: 'Vôlei — JJPR', size: 'large' },
  { id: 6, label: 'Celebração do Título', size: 'small' },
  { id: 7, label: 'Natação', size: 'small' },
  { id: 8, label: 'Handebol Masculino', size: 'small' },
]

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="galeria" className="section-padding bg-dark-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Momentos Históricos"
          title="Nossa"
          highlight="Galeria"
          subtitle="Cada foto conta uma história. Adicione suas fotos dos jogos, eventos e treinos."
        />

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-12">
          {GALLERY_ITEMS.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelected(item.id)}
                className={`relative rounded-xl overflow-hidden cursor-pointer group break-inside-avoid ${
                  item.size === 'large' ? 'aspect-[4/5]' : 'aspect-square'
                } bg-dark-200 border border-white/5 hover:border-gold-500/30 transition-colors`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                  <ImageOff size={24} className="text-gray-600" />
                  <span className="text-gray-600 text-xs font-inter text-center leading-tight">
                    {item.label}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-inter font-medium">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <div className="glass rounded-2xl p-8 inline-block max-w-lg">
              <ImageOff size={40} className="text-gold-500/50 mx-auto mb-4" />
              <h3 className="font-bebas text-2xl text-white mb-2 tracking-wider">
                Suas Fotos Aqui
              </h3>
              <p className="text-gray-500 text-sm font-inter mb-6">
                Envie as fotos dos jogos e eventos para preencher a galeria.
                Você também pode acompanhar nossa galeria no Instagram.
              </p>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-bebas tracking-wider inline-flex items-center gap-2"
              >
                <Instagram size={16} />
                Ver no Instagram
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:text-gold-500 transition-colors z-10"
            >
              <X size={20} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl p-12 max-w-md text-center"
            >
              <ImageOff size={48} className="text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 font-inter text-sm">
                {GALLERY_ITEMS.find((g) => g.id === selected)?.label}
              </p>
              <p className="text-gray-600 font-inter text-xs mt-2">
                Adicione a foto correspondente
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
