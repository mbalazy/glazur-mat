import React from 'react'
import FooterSection from '../../templates/FooterSection'

const FooterContact = () => {
  return (
    <FooterSection subheading="Porozmawiaj z nami!" heading="kontakt do nas" icon="/identi.svg">
      <div>
        <p>Mateusz Oleksy</p>
        <p>Zasępiec 43</p>
        <p>32-340 Wolbrom</p>
      </div>
      <div>
        <p>Nip: 637 217 3444</p>
        <p>Regon: 383155409</p>
      </div>
    </FooterSection>
  )
}

export default FooterContact
