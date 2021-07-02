import SuperNav from '../components/organisms/SuperNav/SuperNav'
import Hero from '../components/organisms/Hero/Hero'
import SiteInProgress from '../components/molecues/SiteInProgress/SiteInProgress'
import SimplyOffer from '../components/organisms/SimplyOffer/SimplyOffer'
import Testimonials from '../components/organisms/Testimonals/Testimonials'

const Home = () => {
  return (
    <>
      <header>
        <SuperNav />
        <Hero />
      </header>
      <main>
        <SimplyOffer />
        <Testimonials />
      </main>
      <footer>
        <SiteInProgress />
      </footer>
    </>
  )
}

export default Home
