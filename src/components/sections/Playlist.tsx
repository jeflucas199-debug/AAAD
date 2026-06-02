import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Music } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

const THUMB_QUALITIES = ['maxresdefault', 'sddefault', 'hqdefault']

function YouTubeThumbnail({ id, title }: { id: string; title: string }) {
  const [qualityIdx, setQualityIdx] = useState(0)
  const src = `https://img.youtube.com/vi/${id}/${THUMB_QUALITIES[qualityIdx]}.jpg`

  const handleError = () => {
    if (qualityIdx < THUMB_QUALITIES.length - 1) setQualityIdx(q => q + 1)
  }

  return (
    <img
      src={src}
      alt={title}
      onError={handleError}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      draggable={false}
    />
  )
}

const MEGAFUNKS = [
  {
    id: 'BJAfdfZAoJU',
    title: 'MEGA DIREITO PUC — JJPR 2K25',
    tag: '2025',
    featured: true,
  },
  {
    id: 'y918kGRCqUs',
    title: 'MEGAFUNK 30 ANOS — DIREITO PUCPR',
    tag: '2024',
    featured: false,
  },
  {
    id: 'ayW-a7A0JSU',
    title: 'MEGAFUNK: A Atlética tá Gigante',
    tag: '2023',
    featured: false,
  },
  {
    id: 'x17_xIrX3eo',
    title: 'MEGAFUNK: Fuja Borracho',
    tag: '2023',
    featured: false,
  },
  {
    id: 'Og8Whnb4j4o',
    title: 'MEGA AAAD — Verão 2022',
    tag: '2022',
    featured: false,
  },
]

function VideoCard({ video, delay, large = false }: { video: typeof MEGAFUNKS[0]; delay: number; large?: boolean }) {
  const url = `https://www.youtube.com/watch?v=${video.id}`

  return (
    <ScrollReveal delay={delay}>
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, scale: 1.015 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="block relative rounded-2xl overflow-hidden group cursor-pointer select-none"
        style={{
          aspectRatio: '16 / 9',
          boxShadow: video.featured
            ? '0 8px 40px rgba(212,192,18,0.18)'
            : '0 4px 24px rgba(0,0,0,0.5)',
        }}
      >
        {/* Thumbnail with quality fallback */}
        <YouTubeThumbnail id={video.id} title={video.title} />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 group-hover:via-black/15 transition-all duration-500" />

        {/* Gold shimmer on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,192,18,0.06) 0%, transparent 70%)' }} />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0.6 }}
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gold-500/90 bg-black/50 border border-white/20 group-hover:border-gold-500"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <Play
              size={large ? 20 : 16}
              className="text-white group-hover:text-dark-500 transition-colors duration-300 ml-0.5"
              fill="currentColor"
            />
          </motion.div>
        </div>

        {/* Year badge */}
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] font-inter font-bold tracking-wider px-2.5 py-1 rounded-full ${
            video.featured
              ? 'bg-gold-500/25 text-gold-400 border border-gold-500/40'
              : 'bg-black/50 text-gray-300 border border-white/10'
          }`}
            style={{ backdropFilter: 'blur(6px)' }}
          >
            {video.tag}
          </span>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {video.featured && <div className="gold-line mb-2" />}
          <h3 className={`font-bebas leading-tight text-white ${large ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
            {video.title}
          </h3>
        </div>

        {/* Champion stripe */}
        {video.featured && (
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <div className="h-[2px] bg-gold-500" />
            <div className="h-[1px] bg-gold-500/40 mt-[2px]" />
          </div>
        )}
      </motion.a>
    </ScrollReveal>
  )
}

export default function Playlist() {
  const [featured, ...rest] = MEGAFUNKS

  return (
    <section id="playlist" className="section-padding bg-dark-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Alçapão Alcoólico"
          title="Mega"
          highlight="Funks"
          subtitle="As músicas oficiais do Touro Loko. Cada funk marca uma época e uma conquista da nossa atlética."
        />

        {/* Featured + grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <VideoCard video={featured} delay={0.05} large />

          <div className="grid grid-cols-2 gap-4">
            {rest.map((video, i) => (
              <VideoCard key={video.id} video={video} delay={0.1 + i * 0.07} />
            ))}
          </div>
        </div>

        {/* Footer note */}
        <ScrollReveal delay={0.5}>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Music size={13} className="text-gold-500/50" />
            <span className="text-gray-600 text-[11px] font-inter uppercase tracking-widest">
              Playlist Oficial da AAADPUCPR
            </span>
            <Music size={13} className="text-gold-500/50" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
