import SimplyOffer from '../components/organisms/SimplyOffer/SimplyOffer'
import SimplyRealizations from '../components/organisms/SimplyRealizations/SimplyRealizations'
import Testimonials from '../components/organisms/Testimonials/Testimonials'
import MainTemplate from '../components/templates/MainTemplate'

const Home = () => {
  return (
    <MainTemplate>
      <SimplyOffer />
      <Testimonials />
      <SimplyRealizations />
    </MainTemplate>
  )
}

export default Home
