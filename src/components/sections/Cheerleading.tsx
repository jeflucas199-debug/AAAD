import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { SOCIAL_LINKS } from '../../lib/data'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

export default function Cheerleading() {
  return (
    <section id="cheerleading" className="section-padding bg-dark-400 relative overflow-hidden">

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Energia nas Arquibancadas"
          title="Red Explosion"
          highlight="Cheerleading"
          subtitle="O squad de cheerleading oficial da AAADPUCPR. Coreografias, acrobacias e muita energia em cada jogo e evento da atlética."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative flex justify-center">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full bg-red-700/35 blur-3xl"
              />
              <div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative z-10 flex-shrink-0"
                style={{ boxShadow: '0 0 65px rgba(200,30,30,0.65), 0 0 110px rgba(180,20,20,0.30)' }}
              >
                <img
                  src="/logo-cheerleading.png"
                  alt="Red Explosion Cheerleading"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-bebas text-4xl md:text-5xl text-white tracking-wider mb-2">
                  O Squad que<br />
                  <span className="text-gradient-gold">Explode de Emoção</span>
                </h3>
              </div>

              <p className="text-gray-400 leading-relaxed font-inter">
                A Red Explosion Cheerleading é o squad oficial da AAADPUCPR. Com
                coreografias ensaiadas e acrobacias impressionantes, elas são presença
                garantida em todos os jogos do JJPR e eventos da atlética.
              </p>

              <p className="text-gray-400 leading-relaxed font-inter">
                Mais do que cheerleading — é representação, arte e paixão pelo Direito
                da PUCPR. A Red Explosion é a cara da atlética nas arquibancadas.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: '📣', label: 'Coreografias' },
                  { icon: '🤸', label: 'Acrobacias' },
                  { icon: '🏆', label: 'Presente nos Jogos' },
                ].map((item) => (
                  <div key={item.label} className="glass rounded-xl p-4 text-center">
                    <span className="text-2xl mb-2 block">{item.icon}</span>
                    <span className="text-gray-400 text-xs font-inter">{item.label}</span>
                  </div>
                ))}
              </div>

              <a
                href={SOCIAL_LINKS.cheerInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 self-start font-bebas tracking-wider text-lg"
              >
                <Instagram size={18} />
                @redexplosioncheer
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
