import Realizations from '../../components/views/Offer/Realizations/Realizations'

const RealizationsPage = ({ realizations }) => <Realizations realizations={realizations} />

export default RealizationsPage

// export async function getStaticProps() {
//   const realizations = await client.fetch(query)
//   return {
//     props: {
//       realizations,
//     },
//   }
// }
