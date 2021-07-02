import SuperNav from '../components/organisms/SuperNav/SuperNav'
import Hero from '../components/organisms/Hero/Hero'
import SiteInProgress from '../components/molecues/SiteInProgress/SiteInProgress'
import SimplyOffer from '../components/organisms/SimplyOffer/SimplyOffer'

const Home = () => {
  return (
    <>
      <header>
        <SuperNav />
        <Hero />
      </header>
      <main>
        <SimplyOffer />
      </main>
      <footer>
        <SiteInProgress />
      </footer>
    </>
  )
}

export default Home
