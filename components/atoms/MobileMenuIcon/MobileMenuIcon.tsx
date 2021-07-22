import React from 'react'
import { MobileMenuContext } from '../../../lib/mobileMenuContext'
import style from './MobileMenuIcon.module.scss'

const MobileMenuIcon = ({ isMobileMenuOpen, setOpenMobileMenu }: MobileMenuContext) => {
  return (
    <button
      className={style.mobileMenuIconWrapper}
      onClick={() => setOpenMobileMenu(!isMobileMenuOpen)}
    >
      <div
        className={`${
          isMobileMenuOpen ? style.mobileMenuIconLinesOpen : style.mobileMenuIconLinesClose
        }`}
      />
    </button>
  )
}

export default MobileMenuIcon
