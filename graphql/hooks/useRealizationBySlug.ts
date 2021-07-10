import { getSdk } from '../../generated/graphql'
import client from '../../lib/graphql-request'

export type RealizationBySlugProps = {
  slug: string
}

export const useRealizationBySlug = async (props: RealizationBySlugProps) => {
  const sdk = getSdk(client)
  const { realizationBySlug } = await sdk.RealizationBySlug(props)
  return realizationBySlug[0]
}
