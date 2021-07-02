import React from 'react'
import { offerContet } from '../../../theme/businessInfo'
import { OfferIconName, OfferIconWrapper } from './OfferIcon.style'
type OfferIconProps = typeof offerContet[number]

const OfferIcon = ({ icon, name }: OfferIconProps) => {
  return (
    <OfferIconWrapper>
      <img src={icon} alt="" />
      <OfferIconName>{name}</OfferIconName>
    </OfferIconWrapper>
  )
}

export default OfferIcon
