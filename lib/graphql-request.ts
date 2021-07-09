import { GraphQLClient } from 'graphql-request'

const endpoint = `https://${process.env.SANITY_ID}.api.sanity.io/v1/graphql/production/default`
const client = new GraphQLClient(endpoint)

export default client
