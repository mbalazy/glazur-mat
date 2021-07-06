import React from 'react'
import OfferThumbnail from '../../components/molecues/OfferThumbnail/OfferThumbnail'
import MainTemplate from '../../components/templates/MainTemplate'
import { offerContet, offerSubheading } from '../../theme/businessInfo'
import { OfferWrapperStyles } from './Offer.style'

const Offer = () => {
  return (
    <MainTemplate
      isFullWidth={true}
      height={52}
      heading="Oferta Glazur-Mat"
      subheading={offerSubheading}
      imageSrc="/hero4.jpg"
    >
      <OfferWrapperStyles>
        {offerContet.map((offer) => (
          <OfferThumbnail key={offer.name} {...offer} />
        ))}
      </OfferWrapperStyles>
    </MainTemplate>
  )
}

export default Offer
