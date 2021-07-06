import React from 'react'
import { offerContet } from '../../../theme/businessInfo'
type OfferThumbnailProps = typeof offerContet[number]

const OfferThumbnail = ({ name, icon, details }: OfferThumbnailProps) => {
  return (
    <>
      <p>{name}</p>
    </>
  )
}

export default OfferThumbnail
