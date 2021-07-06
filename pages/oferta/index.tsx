import React from 'react'
import MainTemplate from '../../components/templates/MainTemplate'
import { offerSubheading } from '../../theme/businessInfo'

const Offer = () => {
  return (
    <MainTemplate
      isFullWidth={true}
      height={52}
      heading="Oferta Glazur-Mat"
      subheading={offerSubheading}
      imageSrc="/hero4.jpg"
    >
      <p>Offer</p>
      <p>Offer</p>
      <p>Offer</p>
    </MainTemplate>
  )
}

export default Offer
