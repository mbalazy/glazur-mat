import React from 'react'
import { offerContet, offerSubheading } from '../../../theme/businessInfo'
import OfferThumbnail from '../../molecues/OfferThumbnail/OfferThumbnail'
import { GridWrapper } from '../../templates/GridWrapper.style'
import MainTemplate from '../../templates/MainTemplate'
import Section from '../../templates/Section'

const Offer = () => {
  return (
    <MainTemplate
      isFullWidth={true}
      height={52}
      heading="Oferta Glazur-Mat"
      subheading={offerSubheading}
      imageSrc="/hero4.jpg"
    >
      <Section heading="Takie usługi świadczymy:">
        <GridWrapper>
          {offerContet.map((offer) => (
            <OfferThumbnail key={offer.name} {...offer} />
          ))}
        </GridWrapper>
      </Section>
    </MainTemplate>
  )
}

export default Offer
