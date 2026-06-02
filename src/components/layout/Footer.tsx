import { Instagram, Music2, ChevronUp } from 'lucide-react'
import { SOCIAL_LINKS } from '../../lib/data'
import { scrollToSection } from '../../lib/utils'

const FOOTER_LINKS = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Modalidades', id: 'modalidades' },
  { label: 'Conquistas', id: 'conquistas' },
  { label: 'Eventos', id: 'eventos' },
  { label: 'Bateria', id: 'bateria' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Diretoria', id: 'diretoria' },
  { label: 'Patrocinadores', id: 'patrocinadores' },
  { label: 'Loja', id: 'loja' },
  { label: 'Seja Sócio', id: 'socios' },
  { label: 'FAQ', id: 'faq' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-aaad.png"
                alt="AAADPUCPR"
                className="h-12 w-12 object-contain"
                onError={(e) => {
                  const t = e.target as HTMLImageElement
                  t.style.display = 'none'
                }}
              />
              <span className="font-bebas text-2xl tracking-wider text-white">
                AAADPUCPR
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Associação Atlética Acadêmica de Direito da PUCPR.
              Fundada em 1994, representando o Direito com garra e determinação.
            </p>
            <p className="font-bebas text-2xl text-gradient-gold tracking-wider">
              Vem Ser Gigante
            </p>
          </div>

          <div>
            <h4 className="font-bebas text-xl text-white tracking-wider mb-6">
              Navegação
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-500 hover:text-gold-500 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-xl text-white tracking-wider mb-6">
              Redes Sociais
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-gold-500 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 glass rounded-lg flex items-center justify-center group-hover:border-gold-500/30 transition-colors">
                  <Instagram size={18} />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Instagram</p>
                  <p className="text-gray-600 text-xs">@aaadpucpr</p>
                </div>
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-gold-500 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 glass rounded-lg flex items-center justify-center group-hover:border-gold-500/30 transition-colors">
                  <Music2 size={18} />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">TikTok</p>
                  <p className="text-gray-600 text-xs">@aaadpucpr</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm text-center md:text-left">
            © {new Date().getFullYear()} AAADPUCPR — Todos os direitos reservados.
          </p>
          <button
            onClick={() => scrollToSection('hero')}
            className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-500 hover:text-gold-500 hover:border-gold-500/30 transition-all duration-200"
            aria-label="Voltar ao topo"
          >
            <ChevronUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
