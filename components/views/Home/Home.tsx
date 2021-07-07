import SimplyOffer from '../../organisms/SimplyOffer/SimplyOffer'
import SimplyRealizations from '../../organisms/SimplyRealizations/SimplyRealizations'
import Testimonials from '../../organisms/Testimonials/Testimonials'
import MainTemplate from '../../templates/MainTemplate'

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
