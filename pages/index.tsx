import SuperNav from '../components/organisms/SuperNav/SuperNav'
import Hero from '../components/organisms/Hero/Hero'
import SiteInProgress from '../components/molecues/SiteInProgress/SiteInProgress'

const Home = () => {
  return (
    <>
      <header>
        <SuperNav />
        <Hero />
      </header>
      <main></main>
      <footer>
        <SiteInProgress />
      </footer>
    </>
  )
}

export default Home
