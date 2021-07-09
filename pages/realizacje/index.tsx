import Realizations from '../../components/views/Realizations/Realizations'
import { IRealizations } from '../../generated/graphql'
import { useAllRealizations } from '../../graphql/hooks/useAllRealizations'

export type RealizationsProps = {
  allRealizations: IRealizations[]
}

const RealizationsPage = (props: RealizationsProps) => <Realizations {...props} />
export default RealizationsPage

export async function getStaticProps() {
  const allRealizations = await useAllRealizations()
  return {
    props: {
      allRealizations,
    },
  }
}
