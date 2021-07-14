import React from 'react'
import MobileMenuIcon from '../../atoms/MobileMenuIcon/MobileMenuIcon'
import MobileMenuContent from '../MobileMenuContent/MobileMenuContent'
import { MobileMenuWrapper } from './MobileMenu.style'

const MobileMenu = () => {
  return (
    <MobileMenuWrapper>
      <MobileMenuIcon />
      <MobileMenuContent />
    </MobileMenuWrapper>
  )
}

export default MobileMenu
