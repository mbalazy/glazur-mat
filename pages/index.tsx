import Home from '../components/views/Home/Home'
import { useAllRealizations } from '../graphql/hooks/useAllRealizations'
import { RealizationsProps } from './realizacje'

const HomePage = (props: RealizationsProps) => <Home {...props} />

export default HomePage

export async function getStaticProps() {
  const allRealizations = await useAllRealizations()
  return {
    props: {
      allRealizations,
    },
  }
}
