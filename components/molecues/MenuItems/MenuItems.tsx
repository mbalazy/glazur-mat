import { useMobileMenu } from '../../../hooks/useMobileMenu'
import { menuItems } from '../../../theme/businessInfo'
import MenuItem from '../../atoms/MenuItem/MenuItem'
import { MenuItemsWrapper } from './MenuItems.style'

export type MenuItemsProps = {
  onFooter?: boolean
  onMobileMenu?: boolean
  onClick?: () => void
}

const MenuItems = ({ onFooter, onMobileMenu }: MenuItemsProps) => {
  const { setOpenMobileMenu } = useMobileMenu()
  return (
    <MenuItemsWrapper onFooter={onFooter} onMobileMenu={onMobileMenu}>
      {menuItems.map((menuItem) => (
        <MenuItem
          onClick={() => onMobileMenu && setOpenMobileMenu(false)}
          onMobileMenu={onMobileMenu}
          onFooter={onFooter}
          key={menuItem.label}
          {...menuItem}
        />
      ))}
    </MenuItemsWrapper>
  )
}

export default MenuItems
