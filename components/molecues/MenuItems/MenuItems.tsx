import { menuItems } from '../../../theme/businessInfo'
import MenuItem from '../../atoms/MenuItem/MenuItem'
import { MenuItemsWrapper } from './MenuItems.style'

export type MenuItemsProps = {
  onFooter?: boolean
  onMobileMenu?: boolean
}

const MenuItems = ({ onFooter, onMobileMenu }: MenuItemsProps) => {
  return (
    <MenuItemsWrapper onFooter={onFooter} onMobileMenu={onMobileMenu}>
      {menuItems.map((menuItem) => (
        <MenuItem
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
