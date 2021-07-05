import React from 'react'
import { menuItems } from '../../../theme/businessInfo'
import BaseLink from '../Link/Link'

type MenuItemProps = typeof menuItems[number]

const MenuItem = ({ label, link }: MenuItemProps) => {
  return (
    <BaseLink simpler href={link}>
      {label}
    </BaseLink>
  )
}

export default MenuItem
