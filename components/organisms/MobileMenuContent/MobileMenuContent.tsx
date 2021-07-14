import React from 'react'
import { MobileMenuContext } from '../../../lib/mobileMenuContext'
import MobileMenuIcon from '../../atoms/MobileMenuIcon/MobileMenuIcon'
import { MobileMenuContentWrapper } from './MobileMenuContent.style'

const MobileMenuContent = (props: MobileMenuContext) => {
  return (
    <MobileMenuContentWrapper isMobileMenuOpen={props.isMobileMenuOpen}>
      <MobileMenuIcon {...props} />
    </MobileMenuContentWrapper>
  )
}

export default MobileMenuContent
