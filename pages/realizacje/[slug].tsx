import { useAllRealizations } from '../../graphql/hooks/useAllRealizations'

const Realization = (props) => {
  console.log(props)
  return (
    <>
      component
      <p>Realization</p>
    </>
  )
}

export default Realization

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const allRealizations = await useAllRealizations()

  // Get the paths we want to pre-render based on posts
  const paths = allRealizations.map((realization) => ({
    params: { slug: realization!.slug!.current },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}
