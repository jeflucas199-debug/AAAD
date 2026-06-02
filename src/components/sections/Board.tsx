import { motion } from 'framer-motion'
import { BOARD_MEMBERS } from '../../lib/data'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

interface Member {
  name: string
  role: string
  photo: string
}

function FeaturedCard({ member, delay }: { member: Member; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="relative rounded-2xl overflow-hidden aspect-[3/4] group"
        style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}
      >
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="gold-line mb-3" />
          <h3 className="font-bebas text-3xl text-white leading-none mb-1">{member.name}</h3>
          <span className="text-gold-500 text-sm font-inter font-semibold tracking-wider uppercase">
            {member.role}
          </span>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

function MemberCard({ member, delay }: { member: Member; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="relative rounded-xl overflow-hidden aspect-[3/4] group"
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
      >
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h4 className="font-bebas text-xl text-white leading-none mb-0.5">{member.name}</h4>
          <span className="text-gold-500/80 text-[11px] font-inter uppercase tracking-wider">
            {member.role}
          </span>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

export default function Board() {
  const featured = BOARD_MEMBERS.slice(0, 2)   // Marilia + Helo
  const rest = BOARD_MEMBERS.slice(2)           // remaining 12

  return (
    <section id="diretoria" className="section-padding bg-dark-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Gestão 2025"
          title="Nossa"
          highlight="Diretoria"
          subtitle="Conheça os responsáveis por representar, organizar e desenvolver a atlética."
        />

        {/* Presidente + VP — featured large */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto mb-6">
          {featured.map((member, i) => (
            <FeaturedCard key={member.name} member={member} delay={i * 0.1} />
          ))}
        </div>

        {/* Rest of the board */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {rest.map((member, i) => (
            <MemberCard key={member.name} member={member} delay={0.2 + i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}
