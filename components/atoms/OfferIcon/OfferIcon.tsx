import React from 'react'
import { offerContet } from '../../../theme/businessInfo'
import style from './OfferIcon.module.scss'

type OfferIconProps = typeof offerContet[number]

const OfferIcon = ({ icon, name }: OfferIconProps) => {
  return (
    <div className={style.OfferIconWrapper}>
      <img src={icon} alt="" />
      <h3 className={style.OfferIconName}>{name}</h3>
    </div>
  )
}

export default OfferIcon
