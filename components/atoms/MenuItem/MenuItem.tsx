import { useRouter } from 'next/router'
import React from 'react'
import { menuItems } from '../../../theme/businessInfo'
import { MenuItemsProps } from '../../molecues/MenuItems/MenuItems'
import BaseLink from '../Link/Link'

type MenuItemProps = typeof menuItems[number] & MenuItemsProps

const MenuItem = ({ label, link, onFooter }: MenuItemProps) => {
  const router = useRouter()
  return (
    <BaseLink
      activeRoute={router.pathname === link}
      variant={onFooter ? 'simpler' : 'outline'}
      href={link}
    >
      {label}
    </BaseLink>
  )
}

export default MenuItem
