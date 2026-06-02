import { useRef, useEffect, useCallback, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

interface ModalityCard {
  id: string
  name: string
  gender: 'M' | 'F' | 'M/F'
  photo: string | null
  achievement: string
  champion?: boolean
}

const CARDS: ModalityCard[] = [
  { id: 'futcampo-m',      name: 'Fut Campo',        gender: 'M',   photo: '/modalities/futcampo-masc.png',    achievement: '1° Lugar Geral — JJPR 2025', champion: true },
  { id: 'futsal-f',        name: 'Futsal',            gender: 'F',   photo: '/modalities/futsal-fem.png',       achievement: '1° Lugar Geral — JJPR 2025', champion: true },
  { id: 'futsal-m',        name: 'Futsal',            gender: 'M',   photo: null,                               achievement: 'Título em breve' },
  { id: 'basquete-m',      name: 'Basquete',          gender: 'M',   photo: '/modalities/basquete-masc.png',    achievement: '1° Lugar Geral — JJPR 2025', champion: true },
  { id: 'basquete-f',      name: 'Basquete',          gender: 'F',   photo: '/modalities/basquete-fem.png',     achievement: '1° Lugar Geral — JJPR 2025', champion: true },
  { id: 'volei-m',         name: 'Vôlei',             gender: 'M',   photo: '/modalities/volei-masc.png',       achievement: '2° Lugar Geral — JJPR 2025' },
  { id: 'volei-f',         name: 'Vôlei',             gender: 'F',   photo: null,                               achievement: 'Título em breve' },
  { id: 'volei-praia-m',   name: 'Vôlei de Praia',    gender: 'M',   photo: '/modalities/volei-praia-masc.png', achievement: '3° Lugar Geral — JJPR 2025' },
  { id: 'volei-praia-f',   name: 'Vôlei de Praia',    gender: 'F',   photo: null,                               achievement: 'Título em breve' },
  { id: 'handebol-m',      name: 'Handebol',          gender: 'M',   photo: '/modalities/handebol-masc.png',    achievement: '3° Lugar Geral — JJPR 2025' },
  { id: 'handebol-f',      name: 'Handebol',          gender: 'F',   photo: null,                               achievement: 'Título em breve' },
  { id: 'natacao',         name: 'Natação',            gender: 'M/F', photo: '/modalities/natacao.png',          achievement: '1° Lugar Geral — JJPR 2025', champion: true },
  { id: 'tenis-mesa-m',    name: 'Tênis de Mesa',     gender: 'M',   photo: '/modalities/tenis-mesa-masc.png',  achievement: '1° Lugar Geral — JJPR 2025', champion: true },
  { id: 'tenis-mesa-f',    name: 'Tênis de Mesa',     gender: 'F',   photo: '/modalities/tenis-mesa-fem.png',   achievement: '1° Lugar Geral — JJPR 2025', champion: true },
  { id: 'judo-f',          name: 'Judô',              gender: 'F',   photo: '/modalities/judo-fem.png',         achievement: '2° Lugar Geral — JJPR 2025' },
  { id: 'judo-m',          name: 'Judô',              gender: 'M',   photo: null,                               achievement: 'Título em breve' },
  { id: 'atletismo-f',     name: 'Atletismo',         gender: 'F',   photo: '/modalities/atletismo-fem.png',    achievement: '3° Lugar Geral — JJPR 2025' },
  { id: 'atletismo-m',     name: 'Atletismo',         gender: 'M',   photo: null,                               achievement: 'Título em breve' },
  { id: 'tenis-campo-m',   name: 'Tênis de Campo',    gender: 'M',   photo: '/modalities/tenis-campo-masc.png', achievement: '3° Lugar Geral — JJPR 2025' },
  { id: 'tenis-campo-f',   name: 'Tênis de Campo',    gender: 'F',   photo: null,                               achievement: 'Título em breve' },
  { id: 'xadrez-m',        name: 'Xadrez',            gender: 'M',   photo: '/modalities/xadrez-masc.png',      achievement: '3° Lugar Geral — JJPR 2025' },
  { id: 'xadrez-f',        name: 'Xadrez',            gender: 'F',   photo: null,                               achievement: 'Título em breve' },
]

const GENDER_LABELS: Record<string, string> = { M: 'Masc', F: 'Fem', 'M/F': 'Misto' }
const GENDER_COLOR = 'bg-white/8 text-gray-400 border border-white/10'
const CARD_W = 260
const GAP = 20

function ModalityCard({ card }: { card: ModalityCard }) {
  return (
    <motion.div
      whileHover={{ scale: 1.07, opacity: 1, y: -8 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex-shrink-0 aspect-[4/5] rounded-2xl overflow-hidden group select-none"
      style={{
        width: CARD_W,
        opacity: 0.85,
        boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
      }}
    >
      {card.photo ? (
        <>
          <img
            src={card.photo}
            alt={`${card.name} ${card.gender}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-dark-200 via-dark-300 to-dark-400">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(212,192,18,0.8) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(212,192,18,0.8) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-20 grayscale">
              {card.name.includes('Futsal') || card.name.includes('Fut Campo') ? '⚽' :
               card.name.includes('Basquete') ? '🏀' :
               card.name.includes('Vôlei') ? '🏐' :
               card.name.includes('Handebol') ? '🤾' :
               card.name.includes('Natação') ? '🏊' :
               card.name.includes('Tênis de Mesa') ? '🏓' :
               card.name.includes('Judô') ? '🥋' :
               card.name.includes('Atletismo') ? '🏃' :
               card.name.includes('Tênis de Campo') ? '🎾' : '♟️'}
            </span>
          </div>
        </div>
      )}

      <div className="absolute top-0 left-0 right-0 p-4 pt-5">
        <h3
          className="font-bebas leading-none mb-1"
          style={{
            fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
            color: '#D4C012',
            fontStyle: 'italic',
            textShadow: '0 2px 8px rgba(0,0,0,0.8)',
          }}
        >
          {card.name}
        </h3>
        <p
          className="font-inter font-bold text-[11px] tracking-wider"
          style={{ color: '#D4C012', textShadow: '0 1px 4px rgba(0,0,0,0.9)', opacity: 0.9 }}
        >
          {card.achievement}
        </p>
      </div>

      <div className="absolute top-4 right-4">
        <span className={`text-[10px] font-inter font-bold px-2 py-0.5 rounded-full ${GENDER_COLOR}`}>
          {GENDER_LABELS[card.gender]}
        </span>
      </div>

      {card.champion && (
        <div className="absolute top-[3.2rem] left-4">
          <span className="text-gold-500 text-xs">✦</span>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex items-end justify-between px-4 pb-3">
          <div className="font-bebas text-xs leading-tight not-italic" style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>
            <div>UMA</div>
            <div>SÓ</div>
            <div style={{ color: '#D4C012' }}>NAÇÃO</div>
          </div>
          <div className="relative h-9 w-9 flex-shrink-0">
            <img src="/logo-aaad.png" alt="AAAD" className="w-full h-full object-contain" />
            <div className="absolute top-0 left-0 right-0 h-[16%]" style={{ background: 'rgba(8,8,8,0.95)' }} />
            <div className="absolute top-0 left-0 right-0 flex justify-center gap-[2px]">
              <span style={{ color: '#D4C012', fontSize: '5px', lineHeight: 1 }}>★</span>
              <span style={{ color: '#D4C012', fontSize: '5px', lineHeight: 1 }}>★</span>
            </div>
          </div>
        </div>
        <div className="h-[3px] bg-gold-500" />
        <div className="h-[2px] bg-gold-500/50 mt-[2px]" />
        <div className="h-[1px] bg-gold-500/25 mt-[2px]" />
      </div>
    </motion.div>
  )
}

export default function Modalities() {
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const [leftConstraint, setLeftConstraint] = useState(-9999)

  const updateMax = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    const padding = window.innerWidth >= 768 ? 64 : 32
    const visibleW = el.clientWidth - padding
    const totalW = CARDS.length * CARD_W + (CARDS.length - 1) * GAP
    setLeftConstraint(-Math.max(0, totalW - visibleW))
  }, [])

  useEffect(() => {
    updateMax()
    const ro = new ResizeObserver(updateMax)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [updateMax])

  return (
    <section id="modalidades" className="py-20 bg-dark-400 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Esporte Universitário"
          title="Nossas"
          highlight="Modalidades"
          subtitle="22 equipes, 12 esportes, uma só nação. Arraste para conhecer cada modalidade."
        />
      </div>

      <div
        ref={containerRef}
        className="overflow-hidden px-4 md:px-8 pb-10"
      >
        <motion.div
          style={{ x }}
          drag="x"
          dragConstraints={{ left: leftConstraint, right: 0 }}
          dragElastic={0.06}
          dragTransition={{ bounceStiffness: 180, bounceDamping: 25, power: 0.3, timeConstant: 220 }}
          className="flex gap-5 w-max cursor-grab active:cursor-grabbing pt-6 pb-2"
        >
          {CARDS.map((card) => (
            <ModalityCard key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
