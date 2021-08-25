import React from 'react'
import businessInfo from '../../../theme/businessInfo'
import { ContactContentWrapper } from './ContactContent.style'

const ContactContent = () => {
  const [telephone] = businessInfo.telephones
  const address = businessInfo.address
  //TODO move nip and regon to businessInfo
  return (
    <ContactContentWrapper>
      <div>
        {address.map((field) => (
          <p key={field}>{field}</p>
        ))}
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
