import React from 'react'
import { MobileMenuContext } from '../../../lib/mobileMenuContext'
import MenuItems from '../../molecues/MenuItems/MenuItems'
import SocialMediaIcons from '../../molecues/SocialMediaIcons/SocialMediaIcons'
import { MobileMenuContentWrapper } from './MobileMenuContent.style'

const MobileMenuContent = ({ isMobileMenuOpen }: MobileMenuContext) => {
  return (
    <MobileMenuContentWrapper isMobileMenuOpen={isMobileMenuOpen}>
      <MenuItems onMobileMenu={true} />
      <SocialMediaIcons />
    </MobileMenuContentWrapper>
  )
}

export default MobileMenuContent
