import { motion } from 'framer-motion'
import { Check, Instagram, ArrowRight } from 'lucide-react'
import { SOCIAL_LINKS } from '../../lib/data'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

const PLANS = [
  {
    name: 'GIGANTE',
    tag: 'Mensal',
    price: 'R$ 20',
    period: '/mês',
    featured: false,
    benefits: [
      'Lote e espaço exclusivos em nossas festas',
      'Desconto nos produtos da AAAD e no pacote dos Jogos Jurídicos*',
      'Acesso aos benefícios oferecidos pelos parceiros da AAAD',
    ],
    note: '*Desconto válido para sócio adimplente',
  },
  {
    name: 'GIGANTE FORMADO',
    tag: 'Mensal',
    price: 'R$ 20',
    period: '/mês',
    featured: true,
    benefits: [
      'Todos os benefícios do plano GIGANTE',
      'Entrada GRATUITA em todas as festas da AAAD',
      'Exclusivo para alunos formados no Direito PUC',
    ],
    note: null,
  },
]

const STATS = [
  { value: '30+', label: 'Anos de história' },
  { value: '22', label: 'Equipes' },
  { value: '12', label: 'Esportes' },
  { value: '2×', label: 'Campeã JJPR' },
]

export default function Members() {
  return (
    <section id="socios" className="section-padding bg-dark-400 relative overflow-hidden">

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212,192,18,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212,192,18,0.8) 1px, transparent 1px)`,
          backgroundSize: '44px 44px',
        }}
      />

      <div className="max-w-7xl mx-auto">

        <SectionTitle
          eyebrow="Faça Parte"
          title="Vem Ser"
          highlight="Sócio"
          subtitle="Junte-se ao Touro Loko e faça parte da maior atlética universitária de Direito do Paraná. Escolha seu plano e venha com a gente."
        />

        {/* Stats */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-14 md:gap-20 mb-14">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="font-bebas text-4xl md:text-5xl text-gold-500 leading-none mb-1">
                  {s.value}
                </div>
                <div className="text-gray-500 text-[11px] font-inter uppercase tracking-widest">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Plan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-12">
          {PLANS.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={0.2 + i * 0.1}>
              <motion.a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col h-full rounded-2xl overflow-hidden group"
                style={{
                  background: plan.featured
                    ? 'linear-gradient(135deg, rgba(212,192,18,0.08) 0%, rgba(212,192,18,0.03) 100%)'
                    : 'rgba(255,255,255,0.03)',
                  border: plan.featured
                    ? '1px solid rgba(212,192,18,0.25)'
                    : '1px solid rgba(255,255,255,0.07)',
                  boxShadow: plan.featured
                    ? '0 8px 40px rgba(212,192,18,0.10)'
                    : '0 4px 24px rgba(0,0,0,0.3)',
                }}
              >
                {/* Header */}
                <div className="p-6 pb-5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bebas text-2xl text-white leading-none tracking-wide">
                        {plan.name}
                      </h3>
                      <span className={`text-[10px] font-inter font-semibold uppercase tracking-widest ${plan.featured ? 'text-gold-500' : 'text-gray-500'}`}>
                        {plan.tag}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className={`font-bebas text-3xl leading-none ${plan.featured ? 'text-gold-500' : 'text-white'}`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-500 text-xs font-inter">{plan.period}</span>
                    </div>
                  </div>

                  {plan.featured && <div className="gold-line mb-0" />}
                </div>

                {/* Benefits */}
                <div className="px-6 pb-5 flex-1">
                  <ul className="flex flex-col gap-3">
                    {plan.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.featured ? 'bg-gold-500/20 border border-gold-500/40' : 'bg-white/8 border border-white/15'
                        }`}>
                          <Check size={9} className={plan.featured ? 'text-gold-500' : 'text-gray-400'} strokeWidth={3} />
                        </div>
                        <span className="text-gray-300 text-[13px] font-inter leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.note && (
                    <p className="text-gray-600 text-[10px] font-inter mt-4 leading-snug">{plan.note}</p>
                  )}
                </div>

                {/* CTA */}
                <div className={`px-6 py-4 flex items-center justify-between border-t ${
                  plan.featured ? 'border-gold-500/15' : 'border-white/5'
                }`}>
                  <span className={`font-inter font-semibold text-sm group-hover:underline underline-offset-2 ${
                    plan.featured ? 'text-gold-500' : 'text-white'
                  }`}>
                    Quero esse plano
                  </span>
                  <ArrowRight size={15} className={`transition-transform duration-300 group-hover:translate-x-1 ${
                    plan.featured ? 'text-gold-500' : 'text-gray-400'
                  }`} />
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        {/* Social link */}
        <ScrollReveal delay={0.5}>
          <div className="flex items-center justify-center">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 hover:text-gold-500 transition-colors font-inter text-sm"
            >
              <Instagram size={16} />
              @aaadpucpr
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
