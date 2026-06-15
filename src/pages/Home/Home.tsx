import Hero from './Hero'
import Philosophy from './Philosophy'
import Marquee from './Marquee'
import Services from './Services'
import Clients from './Clients'
import Contact from './Contact'
import Footer from '../../components/Footer'

function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <Marquee />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home