import React from 'react'
import { MobileMenuContext } from '../../../lib/mobileMenuContext'
import { MobileMenuIconLines, MobileMenuIconWrapper } from './MobileMenuIcon.style'

const MobileMenuIcon = ({ isMobileMenuOpen, setOpenMobileMenu }: MobileMenuContext) => {
  return (
    <MobileMenuIconWrapper onClick={() => setOpenMobileMenu(!isMobileMenuOpen)}>
      <MobileMenuIconLines isMobileMenuOpen={isMobileMenuOpen} />
    </MobileMenuIconWrapper>
  )
}

export default MobileMenuIcon
