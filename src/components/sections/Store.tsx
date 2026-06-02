import { motion } from 'framer-motion'
import { Tag, ExternalLink } from 'lucide-react'
import { STORE_PRODUCTS } from '../../lib/data'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

export default function Store() {
  return (
    <section id="loja" className="section-padding bg-dark-500 relative overflow-hidden">

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Produtos Oficiais"
          title="Loja"
          highlight="AAADPUCPR"
          subtitle="Vista a camisa do Touro Loko. Uniformes, moletons e produtos exclusivos da atlética."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STORE_PRODUCTS.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.1}>
              <motion.a
                href="https://cheers.com.br/pagina/atlética-de-direito-pucpr~8"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                className="block glass rounded-2xl overflow-hidden group transition-all duration-300 hover:border-gold-500/20"
              >
                {/* Product image */}
                <div className="aspect-square bg-dark-200 relative overflow-hidden">
                  <img
                    src={product.photo}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {product.tag && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-gold-500 text-dark-500 text-xs font-bold font-inter px-2 py-1 rounded-full flex items-center gap-1">
                        <Tag size={10} />
                        {product.tag}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <p className="text-gray-500 text-xs font-inter mb-1">{product.category}</p>
                  <h3 className="font-inter font-semibold text-white text-sm leading-tight mb-3 group-hover:text-gold-500 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bebas text-xl text-gold-500">{product.price}</span>
                    <span className="btn-secondary text-xs py-1.5 px-4">
                      Comprar
                    </span>
                  </div>
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <div className="glass-gold inline-block rounded-2xl p-8">
              <ExternalLink size={32} className="text-gold-500 mx-auto mb-4" />
              <h3 className="font-bebas text-2xl text-white tracking-wider mb-2">
                Acesse a Loja Oficial
              </h3>
              <p className="text-gray-400 text-sm font-inter mb-6 max-w-sm">
                Todos os produtos oficiais da AAADPUCPR disponíveis na plataforma Cheers.
              </p>
              <motion.a
                href="https://cheers.com.br/pagina/atlética-de-direito-pucpr~8"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary font-bebas tracking-wider inline-block"
              >
                Acessar Loja
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
