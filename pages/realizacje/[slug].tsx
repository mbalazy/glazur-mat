import { NextSeo } from 'next-seo'
import Realization from '../../components/views/Realization/Realization'
import { IRealizations } from '../../generated/graphql'
import { useAllRealizations } from '../../graphql/hooks/useAllRealizations'
import {
  RealizationBySlugProps,
  useRealizationBySlug,
} from '../../graphql/hooks/useRealizationBySlug'
import businessInfo from '../../theme/businessInfo'

type RealizationPageProps = {
  realization: IRealizations
}

const RealizationPage = ({ realization }: RealizationPageProps) => {
  const { fullTitle } = businessInfo
  return (
    <>
      <NextSeo
        title={`${realization.name} | ${fullTitle}`}
        description={
          realization.description ||
          'Przedstawiamy wybraną realizację, która mieliśmy przyjemność wykonać dla tego klienta.'
        }
      />
      <Realization {...realization} />
    </>
  )
}

export default RealizationPage

export async function getStaticPaths() {
  const allRealizations = await useAllRealizations()

  const paths = allRealizations.map((realization) => ({
    params: { slug: realization?.slug?.current },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: RealizationBySlugProps }) {
  const realization = await useRealizationBySlug(params)
  return { props: { realization } }
}
