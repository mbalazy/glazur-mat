import { RealizationsProps } from '../../../pages/realizacje'
import SimplyOffer from '../../organisms/SimplyOffer/SimplyOffer'
import SimplyRealizations from '../../organisms/SimplyRealizations/SimplyRealizations'
import Testimonials from '../../organisms/Testimonials/Testimonials'
import MainTemplate from '../../templates/MainTemplate'

const Home = (props: RealizationsProps) => {
  return (
    <MainTemplate>
      <SimplyOffer />
      <Testimonials />
      <SimplyRealizations {...props} />
    </MainTemplate>
  )
}

export default Home
