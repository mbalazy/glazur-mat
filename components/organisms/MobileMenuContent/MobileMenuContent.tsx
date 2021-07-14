import React from 'react'
import { MobileMenuContext } from '../../../lib/mobileMenuContext'
import MenuItems from '../../molecues/MenuItems/MenuItems'
import SocialMediaIcons from '../../molecues/SocialMediaIcons/SocialMediaIcons'
import { MobileMenuContentWrapper } from './MobileMenuContent.style'

const MobileMenuContent = (props: MobileMenuContext) => {
  return (
    <MobileMenuContentWrapper isMobileMenuOpen={props.isMobileMenuOpen}>
      <MenuItems onMobileMenu={true} />
      <SocialMediaIcons />
    </MobileMenuContentWrapper>
  )
}

export default MobileMenuContent
