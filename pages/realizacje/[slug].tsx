import { IRealizations } from '../../generated/graphql'
import { useAllRealizations } from '../../graphql/hooks/useAllRealizations'
import {
  RealizationBySlugProps,
  useRealizationBySlug,
} from '../../graphql/hooks/useRealizationBySlug'

type RealizationProps = {
  realization: IRealizations
}

const Realization = ({ realization }: RealizationProps) => {
  console.log(realization)
  return (
    <>
      component
      <p>Realization</p>
    </>
  )
}

export default Realization

export async function getStaticPaths() {
  const allRealizations = await useAllRealizations()

  const paths = allRealizations.map((realization) => ({
    params: { slug: realization!.slug!.current },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: RealizationBySlugProps }) {
  const realization = await useRealizationBySlug(params)
  return { props: { realization } }
}
