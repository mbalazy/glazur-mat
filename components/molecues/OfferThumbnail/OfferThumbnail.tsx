import React from 'react'
import { offerContet } from '../../../theme/businessInfo'
import { H3 } from '../../../theme/Typography'
import OfferDetail from '../../atoms/OfferDetail/OfferDetail'
import { OfferThumbnailWrapper } from './OfferThumbnail.style'
type OfferThumbnailProps = typeof offerContet[number]

const OfferThumbnail = ({ name, icon, details }: OfferThumbnailProps) => {
  return (
    <OfferThumbnailWrapper>
      <img src={icon} alt="" width={32} />
      <H3>{name}</H3>
      <ul>
        {details.map((detail) => (
          <OfferDetail key={detail} detail={detail} />
        ))}
      </ul>
    </OfferThumbnailWrapper>
  )
}

export default OfferThumbnail
