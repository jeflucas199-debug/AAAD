export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/aaadpucpr',
  tiktok: 'https://www.tiktok.com/@aaadpucpr',
  bateriaInstagram: 'https://www.instagram.com/alcapaoalcoolico',
  cheerInstagram: 'https://www.instagram.com/redexplosioncheer',
}

export const STATS = [
  { value: '1994', label: 'Fundação', suffix: '' },
  { value: '30', label: 'Anos de História', suffix: '+' },
  { value: '12', label: 'Modalidades', suffix: '' },
  { value: '5', label: 'Títulos', suffix: '+' },
]

export const MODALITIES = [
  {
    id: 'futebol-campo',
    name: 'Futebol de Campo',
    icon: '⚽',
    genders: ['M'],
    color: '#22c55e',
  },
  {
    id: 'futsal',
    name: 'Futsal',
    icon: '⚽',
    genders: ['M', 'F'],
    color: '#3b82f6',
  },
  {
    id: 'basquete',
    name: 'Basquete',
    icon: '🏀',
    genders: ['M', 'F'],
    color: '#f97316',
  },
  {
    id: 'volei',
    name: 'Vôlei',
    icon: '🏐',
    genders: ['M', 'F'],
    color: '#a855f7',
  },
  {
    id: 'volei-praia',
    name: 'Vôlei de Praia',
    icon: '🏖️',
    genders: ['M', 'F'],
    color: '#eab308',
  },
  {
    id: 'handebol',
    name: 'Handebol',
    icon: '🤾',
    genders: ['M', 'F'],
    color: '#ef4444',
  },
  {
    id: 'natacao',
    name: 'Natação',
    icon: '🏊',
    genders: ['M', 'F'],
    color: '#06b6d4',
  },
  {
    id: 'tenis-mesa',
    name: 'Tênis de Mesa',
    icon: '🏓',
    genders: ['M', 'F'],
    color: '#10b981',
  },
  {
    id: 'judo',
    name: 'Judô',
    icon: '🥋',
    genders: ['M', 'F'],
    color: '#f59e0b',
  },
  {
    id: 'atletismo',
    name: 'Atletismo',
    icon: '🏃',
    genders: ['M', 'F'],
    color: '#8b5cf6',
  },
  {
    id: 'tenis-campo',
    name: 'Tênis de Campo',
    icon: '🎾',
    genders: ['M', 'F'],
    color: '#84cc16',
  },
  {
    id: 'xadrez',
    name: 'Xadrez',
    icon: '♟️',
    genders: ['M', 'F'],
    color: '#6b7280',
  },
]

export const ACHIEVEMENTS = [
  {
    year: '2022',
    title: '3° Lugar — JJPR',
    subtitle: 'Jogos Jurídicos do Paraná',
    medal: '🥉',
    highlight: false,
  },
  {
    year: '2022',
    title: 'Campeã — JOIA Curitiba',
    subtitle: 'Jogos Inter Atlética — Curitiba',
    medal: '🏆',
    highlight: false,
  },
  {
    year: '2023',
    title: '2° Lugar — JJPR',
    subtitle: 'Jogos Jurídicos do Paraná',
    medal: '🥈',
    highlight: false,
  },
  {
    year: '2024',
    title: 'Campeã — JJPR',
    subtitle: 'Jogos Jurídicos do Paraná',
    medal: '🏆',
    highlight: true,
  },
  {
    year: '2025',
    title: 'Bicampeã — JJPR',
    subtitle: 'Jogos Jurídicos do Paraná',
    medal: '🏆',
    highlight: true,
  },
]

export const EVENTS = [
  {
    id: 'jjpr',
    name: 'JJPR',
    fullName: 'Jogos Jurídicos do Paraná',
    description: 'O maior campeonato universitário jurídico do Paraná. Disputamos todas as modalidades com atleticas de todo o estado.',
    frequency: 'Anual',
    icon: '⚖️',
    highlight: true,
  },
  {
    id: 'joia',
    name: 'JOIA Curitiba',
    fullName: 'Jogos Inter Atlética — Curitiba',
    description: 'Competição universitária que reúne atlética de diferentes cursos de Curitiba.',
    frequency: 'Anual',
    icon: '🎓',
    highlight: false,
  },
  {
    id: 'festas',
    name: 'Eventos & Festas',
    fullName: 'Eventos da Atlética',
    description: 'Confraternizações, festas e eventos exclusivos para membros e estudantes de Direito da PUCPR.',
    frequency: 'Esporádico',
    icon: '🎉',
    highlight: false,
  },
]

export const BOARD_MEMBERS = [
  { name: 'Marilia', role: 'Presidente', photo: '/board/marilia.jpg' },
  { name: 'Helo', role: 'Vice-Presidente', photo: '/board/helo.jpg' },
  { name: 'Bella', role: 'Secretaria', photo: '/board/bella.jpg' },
  { name: 'Enzo', role: 'Tesouraria', photo: '/board/enzo.jpg' },
  { name: 'Duda', role: 'Estag. Executivo', photo: '/board/duda.jpg' },
  { name: 'Mari', role: 'Esportes', photo: '/board/mari.jpg' },
  { name: 'João', role: 'Estag. Esportes', photo: '/board/joao.jpg' },
  { name: 'Jota', role: 'Eventos', photo: '/board/jota.jpg' },
  { name: 'Carol', role: 'Eventos', photo: '/board/carol.jpg' },
  { name: 'Lays', role: 'Marketing', photo: '/board/lays.jpg' },
  { name: 'Malu', role: 'Produtos', photo: '/board/malu.jpg' },
  { name: 'Lari', role: 'Estag. Produtos', photo: '/board/lari.jpg' },
  { name: 'Taher', role: 'Sócios', photo: '/board/taher.jpg' },
  { name: 'Fialho & Giu', role: 'Conselheiros', photo: '/board/conselheiros.jpg' },
]

export const SPONSORS = [
  { name: 'Patrocinador Ouro 1', tier: 'ouro' },
  { name: 'Patrocinador Ouro 2', tier: 'ouro' },
  { name: 'Patrocinador Prata 1', tier: 'prata' },
  { name: 'Patrocinador Prata 2', tier: 'prata' },
  { name: 'Patrocinador Prata 3', tier: 'prata' },
  { name: 'Patrocinador Bronze 1', tier: 'bronze' },
  { name: 'Patrocinador Bronze 2', tier: 'bronze' },
  { name: 'Patrocinador Bronze 3', tier: 'bronze' },
]

export const STORE_PRODUCTS = [
  {
    id: 1,
    name: 'Moletom Champion PUCPR Direito',
    category: 'Vestuário',
    price: 'R$ --,--',
    tag: 'Mais Vendido',
    photo: '/store/moletom.jpg',
  },
  {
    id: 2,
    name: 'Shorts Saia 1994 Direito PUCPR',
    category: 'Vestuário',
    price: 'R$ --,--',
    tag: 'Novo',
    photo: '/store/shorts-saia.jpg',
  },
  {
    id: 3,
    name: 'Top Amarração Touro Loko',
    category: 'Vestuário',
    price: 'R$ --,--',
    tag: null,
    photo: '/store/top-amarracao.jpg',
  },
  {
    id: 4,
    name: 'Jersey MLB Direito PUCPR',
    category: 'Uniformes',
    price: 'R$ --,--',
    tag: 'Especial',
    photo: '/store/jersey-mlb.jpg',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'O que é a AAADPUCPR?',
    answer: 'A AAADPUCPR é a Associação Atlética Acadêmica de Direito da PUCPR, fundada em 1994. Somos responsáveis por representar os estudantes de Direito da PUCPR nas competições universitárias, promover o esporte e fortalecer a identidade do curso.',
  },
  {
    question: 'Como me tornar sócio?',
    answer: 'Para se tornar sócio da AAADPUCPR, entre em contato conosco pelo Instagram ou TikTok. Nossos membros têm acesso a eventos exclusivos, descontos na loja oficial e podem participar das modalidades esportivas.',
  },
  {
    question: 'Quais competições a atlética participa?',
    answer: 'Participamos anualmente do JJPR (Jogos Jurídicos do Paraná) e do JOIA. Somos bicampeões do JJPR 2024 e 2025 e campeões do JOIA 2022.',
  },
  {
    question: 'Posso participar mesmo sem ser atleta?',
    answer: 'Sim! A AAADPUCPR é muito mais do que esporte. Você pode participar como torcedor, membro da bateria Alçapão Alcoólico, apoiador ou simplesmente fazer parte da nossa comunidade.',
  },
  {
    question: 'Como funciona a loja oficial?',
    answer: 'Nossa loja vende uniformes, moletons e produtos personalizados com a marca AAADPUCPR. Para comprar, acesse o botão "Comprar" na seção Loja do nosso site.',
  },
  {
    question: 'O que é o Alçapão Alcoólico?',
    answer: 'O Alçapão Alcoólico é a bateria oficial da AAADPUCPR. Eles animam todos os nossos jogos e eventos, sendo uma parte fundamental da identidade e da energia da nossa atlética.',
  },
]
