import React from 'react'
import { OfferDetailStyles } from './OfferDetail.style'
type OfferDetailProps = {
  detail: string
}

const OfferDetail = ({ detail }: OfferDetailProps) => {
  return <OfferDetailStyles>{detail}</OfferDetailStyles>
}

export default OfferDetail
