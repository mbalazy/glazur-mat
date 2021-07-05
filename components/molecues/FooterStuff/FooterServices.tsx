import React from 'react'
import FooterSection from '../../templates/FooterSection'
import MenuItems from '../MenuItems/MenuItems'

const FooterServices = () => {
  return (
    <FooterSection subheading="Współpracuj z nami!" heading="nasze usługi" icon="/renov.svg">
      <MenuItems />
    </FooterSection>
  )
}

export default FooterServices
