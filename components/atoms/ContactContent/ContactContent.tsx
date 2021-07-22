import React from 'react'
import businessInfo from '../../../theme/businessInfo'
import style from './ContactContent.module.scss'

const ContactContent = () => {
  const [telephone] = businessInfo.telephones
  return (
    <div className={style.contactContentWrapper}>
      <div>
        <p>Mateusz Oleksy</p>
        <p>Zasępiec 43</p>
        <p>32-340 Wolbrom</p>
      </div>
      <div>
        <p>Tel: {telephone}</p>
        <p>Nip: 637 217 3444</p>
        <p>Regon: 383155409</p>
      </div>
    </div>
  )
}

export default ContactContent
