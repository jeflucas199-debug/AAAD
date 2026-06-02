import { motion } from 'framer-motion'
import { Repeat } from 'lucide-react'
import { EVENTS } from '../../lib/data'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

export default function Events() {
  return (
    <section id="eventos" className="section-padding bg-dark-400 relative overflow-hidden">

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Calendário Atlético"
          title="Eventos &"
          highlight="Competições"
          subtitle="Do JJPR ao JOIA, cada evento é uma nova oportunidade de mostrar por que somos o Touro Loko."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((event, i) => (
            <ScrollReveal key={event.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl overflow-hidden h-full transition-all duration-300 ${
                  event.highlight
                    ? 'bg-gradient-to-br from-gold-500/15 to-dark-300 border border-gold-500/25'
                    : 'glass hover:border-gold-500/20'
                }`}
              >
                {event.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold-500 text-dark-500 text-xs font-bold font-inter px-2 py-1 rounded-full">
                      Principal
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-5xl mb-5 h-14 flex items-center">
                    {event.id === 'jjpr' ? (
                      <img
                        src="/logo-jjpr.png"
                        alt="JJPR"
                        className="h-12 w-auto object-contain"
                        onError={(e) => { (e.target as HTMLImageElement).replaceWith(Object.assign(document.createElement('span'), { textContent: '⚖️' })) }}
                      />
                    ) : event.id === 'joia' ? (
                      <img
                        src="/achievements/joia-curitiba.jpg"
                        alt="JOIA Curitiba"
                        className="h-12 w-auto object-contain rounded-lg"
                        onError={(e) => { (e.target as HTMLImageElement).replaceWith(Object.assign(document.createElement('span'), { textContent: '🎓' })) }}
                      />
                    ) : event.id === 'festas' ? (
                      <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src="/mascote-festa.jpg"
                          alt="Eventos & Festas"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ) : (
                      <span>{event.icon}</span>
                    )}
                  </div>
                  <h3 className="font-bebas text-3xl text-white tracking-wider mb-1">
                    {event.name}
                  </h3>
                  <p className="text-gold-500 text-sm font-inter font-medium mb-4">
                    {event.fullName}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-inter">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-inter">
                    <Repeat size={14} className="text-gold-500" />
                    <span>{event.frequency}</span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
