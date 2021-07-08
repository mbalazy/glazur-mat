import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: process.env.SANITY_ID,
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client
