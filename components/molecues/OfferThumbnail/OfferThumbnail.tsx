import React from 'react'
import { offerContet } from '../../../theme/businessInfo'
import style from './OfferThumbnail.module.scss'
import OfferDetail from '../../atoms/OfferDetail/OfferDetail'
type OfferThumbnailProps = typeof offerContet[number]

const OfferThumbnail = ({ name, icon, details }: OfferThumbnailProps) => {
  return (
    <div className={style.OfferThumbnailWrapper}>
      <img src={icon} alt="" />
      <h3>{name}</h3>
      <div>
        {details.map((detail) => (
          <OfferDetail key={detail} detail={detail} />
        ))}
      </div>
    </div>
  )
}

export default OfferThumbnail
