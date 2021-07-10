import { getSdk } from '../../generated/graphql'
import client from '../../lib/graphql-request'

export const useRealizationBySlug = async (slug: string) => {
  const sdk = getSdk(client)
  const { realizationBySlug } = await sdk.RealizationBySlug({ slug })
  return realizationBySlug
}
