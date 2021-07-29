import Realizations from '../../components/views/Realizations/Realizations'
import { IRealizations } from '../../generated/graphql'
import { useAllRealizations } from '../../graphql/hooks/useAllRealizations'
import { NextSeo } from 'next-seo'
import businessInfo from '../../theme/businessInfo'

export type RealizationsProps = {
  allRealizations: IRealizations[]
}

const RealizationsPage = (props: RealizationsProps) => {
  const { fullTitle } = businessInfo
  return (
    <>
      <NextSeo
        title={`Realizacje | ${fullTitle}`}
        description="Przedstawiamy wybrane realizacje, które mieliśmy przyjemność wykonać dla naszych klientów."
      />
      <Realizations {...props} />
    </>
  )
}
export default RealizationsPage

export async function getStaticProps() {
  const allRealizations = await useAllRealizations()
  return {
    props: {
      allRealizations,
    },
  }
}
