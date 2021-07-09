import Realizations from '../../components/views/Offer/Realizations/Realizations'
import { Realizations as RealizationType } from '../../generated/graphql'
import { useAllRealizations } from '../../graphql/hooks/useAllRealizations'

export type RealizationsProps = {
  allRealizations: RealizationType[]
}

const RealizationsPage = (props: RealizationsProps) => {
  return <Realizations {...props} />
}
export default RealizationsPage

export async function getStaticProps() {
  const { allRealizations } = await useAllRealizations()
  return {
    props: {
      allRealizations,
    },
  }
}
