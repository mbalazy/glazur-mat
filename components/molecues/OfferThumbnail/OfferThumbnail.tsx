import React from 'react'
import { offerContet } from '../../../theme/businessInfo'
import { H3 } from '../../../theme/Typography'
import { OfferThumbnailWrapper } from './OfferThumbnail.style'
type OfferThumbnailProps = typeof offerContet[number]

const OfferThumbnail = ({ name, icon, details }: OfferThumbnailProps) => {
  return (
    <OfferThumbnailWrapper>
      <img src={icon} alt="" />
      <H3>{name}</H3>
      <div>
        {details.map((detail) => (
          <p key={detail}>{detail}</p>
        ))}
      </div>
    </OfferThumbnailWrapper>
  )
}

export default OfferThumbnail
