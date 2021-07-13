import { useRouter } from 'next/router'
import React from 'react'
import { getActiveRoute } from '../../../lib/getActiveRoute'
import { menuItems } from '../../../theme/businessInfo'
import { MenuItemsProps } from '../../molecues/MenuItems/MenuItems'
import BaseLink from '../Link/Link'

type MenuItemProps = typeof menuItems[number] & MenuItemsProps

const MenuItem = ({ label, link, onFooter }: MenuItemProps) => {
  const { pathname } = useRouter()
  return (
    <BaseLink
      activeRoute={getActiveRoute(link, pathname)}
      variant={onFooter ? 'simpler' : 'outline'}
      href={link}
    >
      {label}
    </BaseLink>
  )
}

export default MenuItem
