import React from 'react'
import { menuItems } from '../../../theme/businessInfo'
import { MenuItemsProps } from '../../molecues/MenuItems/MenuItems'
import BaseLink from '../Link/Link'

type MenuItemProps = typeof menuItems[number] & MenuItemsProps

const MenuItem = ({ label, link, onFooter }: MenuItemProps) => {
  return (
    <BaseLink variant={onFooter ? 'simpler' : 'outline'} href={link}>
      {label}
    </BaseLink>
  )
}

export default MenuItem
