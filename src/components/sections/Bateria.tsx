import { motion } from 'framer-motion'
import { Music, Instagram } from 'lucide-react'
import { SOCIAL_LINKS } from '../../lib/data'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

export default function Bateria() {
  return (
    <section id="bateria" className="section-padding bg-dark-500 relative overflow-hidden">
      {/* Red accent background for the bateria section */}

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="A Alma dos Jogos"
          title="Alçapão"
          highlight="Alcoólico"
          subtitle="A bateria oficial da AAADPUCPR. Eles transformam cada jogo em uma festa e cada gol em uma explosão de emoção."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative flex justify-center">
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full bg-red-800/30 blur-3xl"
              />
              <img
                src="/logo-bateria.png"
                alt="Alçapão Alcoólico"
                className="w-72 h-72 md:w-96 md:h-96 object-contain relative z-10 flex-shrink-0"
                style={{ filter: 'drop-shadow(0 0 50px rgba(180,30,30,0.55))' }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-bebas text-4xl md:text-5xl text-white tracking-wider mb-2">
                  A Bateria que<br />
                  <span className="text-gradient-gold">Faz Tremer as Arquibancadas</span>
                </h3>
              </div>

              <p className="text-gray-400 leading-relaxed font-inter">
                O Alçapão Alcoólico é muito mais do que uma bateria — é a energia que move
                a AAADPUCPR. Presente em todos os jogos e eventos, eles são responsáveis
                por transformar o ambiente e dar aquele empurrão extra que nossos atletas precisam.
              </p>

              <p className="text-gray-400 leading-relaxed font-inter">
                Uma parte fundamental da identidade da atlética, o Alçapão representa a
                paixão, a festa e o espírito universitário que nos define.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: '🥁', label: 'Ritmo Intenso' },
                  { icon: '🎉', label: 'Energia Total' },
                  { icon: '🏆', label: 'Presença em Todos os Jogos' },
                ].map((item) => (
                  <div key={item.label} className="glass rounded-xl p-4 text-center">
                    <span className="text-2xl mb-2 block">{item.icon}</span>
                    <span className="text-gray-400 text-xs font-inter">{item.label}</span>
                  </div>
                ))}
              </div>

              <a
                href={SOCIAL_LINKS.bateriaInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 self-start font-bebas tracking-wider text-lg"
              >
                <Instagram size={18} />
                @alcapaoalcoolico
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Music note decorations */}
        <div className="absolute top-20 right-10 opacity-5 pointer-events-none">
          <Music size={120} className="text-gold-500" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-5 pointer-events-none rotate-12">
          <Music size={80} className="text-gold-500" />
        </div>
      </div>
    </section>
  )
}
