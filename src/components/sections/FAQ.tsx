import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQ_ITEMS } from '../../lib/data'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-dark-500 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          eyebrow="Dúvidas Frequentes"
          title="Perguntas"
          highlight="& Respostas"
        />

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <motion.div
                className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
                  open === i
                    ? 'border-gold-500/30 bg-gold-500/5'
                    : 'glass hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left"
                >
                  <span className="font-inter font-semibold text-white text-sm md:text-base leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      open === i
                        ? 'bg-gold-500 text-dark-500'
                        : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    {open === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-400 text-sm font-inter leading-relaxed border-t border-white/5 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
