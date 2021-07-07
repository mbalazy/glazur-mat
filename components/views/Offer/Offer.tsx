import React from 'react'
import OfferThumbnail from '../../molecues/OfferThumbnail/OfferThumbnail'
import MainTemplate from '../../templates/MainTemplate'
import { offerContet, offerSubheading } from '../../../theme/businessInfo'
import { OfferOuterWrapper, OfferWrapperStyles } from './Offer.style'

const Offer = () => {
  return (
    <MainTemplate
      isFullWidth={true}
      height={52}
      heading="Oferta Glazur-Mat"
      subheading={offerSubheading}
      imageSrc="/hero4.jpg"
    >
      <OfferOuterWrapper>
        <OfferWrapperStyles>
          {offerContet.map((offer) => (
            <OfferThumbnail key={offer.name} {...offer} />
          ))}
        </OfferWrapperStyles>
      </OfferOuterWrapper>
    </MainTemplate>
  )
}

export default Offer
