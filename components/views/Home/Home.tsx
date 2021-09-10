import { RealizationsProps } from '../../../pages/realizacje'
import SimplyOffer from '../../organisms/SimplyOffer/SimplyOffer'
import SimplyRealizations from '../../organisms/SimplyRealizations/SimplyRealizations'
import Testimonials from '../../organisms/Testimonials/Testimonials'
import MainTemplate from '../../templates/MainTemplate'
import FacebookChat from '../../organisms/FacebookChat/FacebookChat'

const Home = (props: RealizationsProps) => {
  return (
    <MainTemplate isOnHome={true}>
      <FacebookChat />
      <SimplyOffer />
      <Testimonials />
      <SimplyRealizations {...props} />
    </MainTemplate>
  )
}

export default Home
