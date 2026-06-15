import Hero from './Hero'
import Marquee from './Marquee'
import Philosophy from './Philosophy'
import Services from './Services'
import Clients from './Clients'
import Contact from './Contact'
import Footer from '../../components/Footer'

function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Philosophy />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home