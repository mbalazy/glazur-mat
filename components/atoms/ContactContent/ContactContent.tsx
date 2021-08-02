import React from 'react'
import businessInfo from '../../../theme/businessInfo'
import { ContactContentWrapper } from './ContactContent.style'

const ContactContent = () => {
  const [telephone] = businessInfo.telephones
  return (
    <ContactContentWrapper>
      <div>
        <p>Mateusz Oleksy</p>
        <p>Zasępiec 43</p>
        <p>32-340 Wolbrom</p>
      </div>
      <div>
        <a href={`tel: ${telephone}`}>Tel: {telephone}</a>
        <p>Nip: 637 217 3444</p>
        <p>Regon: 383155409</p>
      </div>
    </ContactContentWrapper>
  )
}

export default ContactContent
