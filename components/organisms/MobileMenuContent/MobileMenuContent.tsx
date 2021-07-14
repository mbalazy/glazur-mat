import React from 'react'
import { MobileMenuContext } from '../../../lib/mobileMenuContext'
import MobileMenuIcon from '../../atoms/MobileMenuIcon/MobileMenuIcon'
import { MobileMenuContentWrapper } from './MobileMenuContent.style'

const MobileMenuContent = (props: MobileMenuContext) => {
  return (
    <MobileMenuContentWrapper isMobileMenuOpen={props.isMobileMenuOpen}>
      <p>MobileMenuContent</p>
      <MobileMenuIcon {...props} />
    </MobileMenuContentWrapper>
  )
}

export default MobileMenuContent
