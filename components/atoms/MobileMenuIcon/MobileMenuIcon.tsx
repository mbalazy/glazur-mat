import React from 'react'
import { MobileMenuContext } from '../../../lib/mobileMenuContext'
import { MobileMenuIconLines } from './MobileMenuIcon.style'
import style from './MobileMenuIcon.module.scss'

const MobileMenuIcon = ({ isMobileMenuOpen, setOpenMobileMenu }: MobileMenuContext) => {
  return (
    <button
      className={style.mobileMenuIconWrapper}
      onClick={() => setOpenMobileMenu(!isMobileMenuOpen)}
    >
      <MobileMenuIconLines isMobileMenuOpen={isMobileMenuOpen} />
    </button>
  )
}

export default MobileMenuIcon
