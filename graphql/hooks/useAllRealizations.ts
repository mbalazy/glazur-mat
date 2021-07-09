import { getSdk } from '../../generated/graphql'
import client from '../../lib/graphql-request'

export const useAllRealizations = async () => {
  const sdk = getSdk(client)
  const { allRealizations } = await sdk.AllRealizations()
  return allRealizations
}
