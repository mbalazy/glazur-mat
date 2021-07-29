import Offer from '../../components/views/Offer/Offer'
import { NextSeo } from 'next-seo'
import businessInfo from '../../theme/businessInfo'

const OfferPage = () => {
  const { fullTitle } = businessInfo
  return (
    <>
      <NextSeo
        title={`Oferta | ${fullTitle}`}
        description="Oferujemy Państwu usługi wykończeniowe i remontowo-budowlane na najwyższym poziomie."
      />
      <Offer />
    </>
  )
}

export default OfferPage
