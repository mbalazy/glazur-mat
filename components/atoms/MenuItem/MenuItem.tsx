import { useRouter } from 'next/router'
import React from 'react'
import { getActiveRoute } from '../../../lib/getActiveRoute'
import { menuItems } from '../../../theme/businessInfo'
import { MenuItemsProps } from '../../molecues/MenuItems/MenuItems'
import BaseLink from '../Link/Link'

type MenuItemProps = typeof menuItems[number] & MenuItemsProps

const MenuItem = ({ label, link, onFooter, onMobileMenu, onClick }: MenuItemProps) => {
  //TODO move to own component
  const validateLinkVariant = (onFooter?: boolean, onMobileMenu?: boolean) => {
    if (onFooter) {
      return 'simpler'
    } else if (onMobileMenu) {
      return 'mobile'
    } else {
      return 'outline'
    }
  }

  const { pathname } = useRouter()
  return (
    <BaseLink
      onClick={onClick}
      activeRoute={getActiveRoute(link, pathname)}
      variant={validateLinkVariant(onFooter, onMobileMenu)}
      href={link}
    >
      {label}
    </BaseLink>
  )
}

export default MenuItem
