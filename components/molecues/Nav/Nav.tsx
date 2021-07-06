import React from 'react'
import { menuItems } from '../../../theme/businessInfo'
import BaseLink from '../../atoms/Link/Link'
import { NavWrapper } from './Nav.style'

const Nav = () => {
  return (
    <NavWrapper>
      {menuItems.map(({ label, link }) => (
        <BaseLink key={label} href={link}>
          {label}
        </BaseLink>
      ))}
    </NavWrapper>
  )
}

export default Nav
