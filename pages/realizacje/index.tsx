import Realizations from '../../components/views/Offer/Realizations/Realizations'
import { getSdk, Realizations as RealizationsType } from '../../generated/graphql'
import client from '../../lib/graphql-request'

export type RealizationsProps = {
  allRealizations: RealizationsType[]
}

const RealizationsPage = (props: RealizationsProps) => <Realizations {...props} />

export default RealizationsPage

export async function getStaticProps() {
  const sdk = getSdk(client)
  const { allRealizations } = await sdk.AllRealizations()

  return {
    props: {
      allRealizations,
    },
  }
}
