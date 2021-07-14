import React from 'react'
import { useMobileMenu } from '../../../hooks/useMobileMenu'
import MobileMenuIcon from '../../atoms/MobileMenuIcon/MobileMenuIcon'
import MobileMenuContent from '../MobileMenuContent/MobileMenuContent'
import { MobileMenuWrapper } from './MobileMenu.style'

const MobileMenu = () => {
  return (
    <MobileMenuWrapper>
      <MobileMenuIcon {...useMobileMenu()} />
      <MobileMenuContent {...useMobileMenu()} />
    </MobileMenuWrapper>
  )
}

export default MobileMenu
