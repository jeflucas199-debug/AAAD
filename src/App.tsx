import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Modalities from './components/sections/Modalities'
import Achievements from './components/sections/Achievements'
import Events from './components/sections/Events'
import Bateria from './components/sections/Bateria'
import Cheerleading from './components/sections/Cheerleading'
import Board from './components/sections/Board'
import Sponsors from './components/sections/Sponsors'
import Store from './components/sections/Store'
import Members from './components/sections/Members'
import Playlist from './components/sections/Playlist'
import SectionDivider from './components/ui/SectionDivider'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-500 text-white">
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Modalities />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Events />
        <SectionDivider />
        <Bateria />
        <SectionDivider />
        <Cheerleading />
        <SectionDivider />
        <Board />
        <SectionDivider />
        <Sponsors />
        <SectionDivider />
        <Store />
        <SectionDivider />
        <Members />
        <SectionDivider />
        <Playlist />
      </main>
      <Footer />
    </div>
  )
}
