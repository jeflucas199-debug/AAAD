import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

interface AchievementCard {
  year: string
  title: string
  event: string
  photo: string | null
  champion: boolean
  detail?: string
  objectPosition?: string
}

const CARDS: AchievementCard[] = [
  {
    year: '2025',
    title: 'Bicampeã',
    event: 'JJPR — Jogos Jurídicos do Paraná',
    photo: '/achievements/jjpr-2025.jpg',
    champion: true,
    detail: 'Título consecutivo — dominando o Paraná',
  },
  {
    year: '2024',
    title: 'Campeã',
    event: 'JJPR — Jogos Jurídicos do Paraná',
    photo: '/achievements/jjpr-2024.jpg',
    champion: true,
    detail: 'Primeiro título geral do JJPR',
  },
  {
    year: '2023',
    title: '2° Lugar',
    event: 'JJPR — Jogos Jurídicos do Paraná',
    photo: '/achievements/jjpr-2023.jpg',
    champion: false,
    detail: 'Prata que antecipou o ouro',
  },
  {
    year: '2022',
    title: 'Campeã',
    event: 'JOIA Curitiba — Jogos OAB Integração Acadêmica',
    photo: '/achievements/joia-2022.jpg',
    champion: true,
    detail: 'Título nacional que marcou o início da era',
  },
  {
    year: '2022',
    title: '3° Lugar',
    event: 'JJPR — Jogos Jurídicos do Paraná',
    photo: '/achievements/jjpr-2022.jpg',
    champion: false,
    detail: 'O começo de uma era vitoriosa',
    objectPosition: '60% center',
  },
]

function AchievementCard({ card, index }: { card: AchievementCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03, y: -6 }}
      className="relative flex-1 min-w-[160px] max-w-[240px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group select-none"
      style={{
        boxShadow: card.champion
          ? '0 8px 40px rgba(212,192,18,0.15)'
          : '0 8px 32px rgba(0,0,0,0.5)',
      }}
    >
      {card.photo ? (
        <>
          <img
            src={card.photo}
            alt={`${card.year} — ${card.title}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: card.objectPosition ?? 'center' }}
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/10 to-black/80" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-dark-300 via-dark-400 to-dark-500">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(212,192,18,0.8) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(212,192,18,0.8) 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }}
          />
          <motion.div
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.6 }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_55%,rgba(212,192,18,0.18)_0%,transparent_70%)]"
          />
          <div
            className="absolute inset-0 flex items-center justify-center font-bebas select-none pointer-events-none"
            style={{ fontSize: '8rem', color: 'rgba(212,192,18,0.04)', lineHeight: 1 }}
          >
            {card.year}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
            >
              <Trophy size={72} className="text-gold-500/25" />
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/60" />
        </div>
      )}

      {/* Year badge + trophy */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <span
          className={`text-[10px] font-inter font-bold tracking-wider px-2.5 py-1 rounded-full ${
            card.champion
              ? 'bg-gold-500/20 text-gold-400 border border-gold-500/30'
              : 'bg-white/10 text-gray-300 border border-white/10'
          }`}
        >
          {card.year}
        </span>
        {card.champion && (
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
          >
            <Trophy size={15} className="text-gold-500" />
          </motion.div>
        )}
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 pt-14 bg-gradient-to-t from-black/92 via-black/50 to-transparent">
        <h3
          className="font-bebas leading-none mb-1.5"
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            color: card.champion ? '#D4C012' : '#FFFFFF',
            fontStyle: 'italic',
            textShadow: card.champion
              ? '0 0 20px rgba(212,192,18,0.35)'
              : '0 2px 8px rgba(0,0,0,0.8)',
          }}
        >
          {card.title}
        </h3>
        <p className="font-inter text-[10px] font-medium mb-1 leading-tight text-white/55">
          {card.event}
        </p>
        {card.detail && (
          <p className="font-inter text-[9px] italic text-gold-500/55">
            {card.detail}
          </p>
        )}
      </div>

      {/* Gold stripes on champion cards */}
      {card.champion && (
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <div className="h-[3px] bg-gold-500" />
          <div className="h-[2px] bg-gold-500/40 mt-[2px]" />
          <div className="h-[1px] bg-gold-500/20 mt-[2px]" />
        </div>
      )}
    </motion.div>
  )
}

export default function Achievements() {
  return (
    <section id="conquistas" className="py-20 bg-dark-500 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Trajetória de Vitórias"
          title="Nossas"
          highlight="Conquistas"
          subtitle="De terceiro lugar em 2022 para bicampeãs em 2024 e 2025. Uma história de evolução, determinação e domínio."
        />

        {/* Cards — centered, no scroll */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {CARDS.map((card, i) => (
            <AchievementCard key={`${card.year}-${card.title}`} card={card} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
