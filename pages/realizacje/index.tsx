import Realizations from '../../components/views/Offer/Realizations/Realizations'
import client from '../../lib/sanity'

const query = `
*[_type == 'realizations'] 
| order(_updatedAt desc)
{ _id,
 name,
 description,
 images,
 slug,
_updatedAt
}
`

const RealizationsPage = ({ realizations }) => <Realizations realizations={realizations} />

export default RealizationsPage

export async function getStaticProps() {
  const realizations = await client.fetch(query)
  return {
    props: {
      realizations,
    },
  }
}
