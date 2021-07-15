import React from 'react'
import { MobileMenuContext } from '../../../lib/mobileMenuContext'
import MailInfo from '../../molecues/ContactInfo/MailInfo'
import PhoneInfo from '../../molecues/ContactInfo/PhoneInfo'
import MenuItems from '../../molecues/MenuItems/MenuItems'
import SocialMediaIcons from '../../molecues/SocialMediaIcons/SocialMediaIcons'
import { MobileMenuContentWrapper } from './MobileMenuContent.style'

const MobileMenuContent = ({ isMobileMenuOpen }: MobileMenuContext) => {
  return (
    <MobileMenuContentWrapper isMobileMenuOpen={isMobileMenuOpen}>
      <MenuItems onMobileMenu={true} />
      <PhoneInfo />
      <MailInfo />
      <SocialMediaIcons />
    </MobileMenuContentWrapper>
  )
}

export default MobileMenuContent
