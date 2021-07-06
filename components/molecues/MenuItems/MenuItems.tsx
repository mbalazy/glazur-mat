import { menuItems } from '../../../theme/businessInfo'
import MenuItem from '../../atoms/MenuItem/MenuItem'
import { MenuItemsWrapper } from './MenuItems.style'

export type MenuItemsProps = {
  onFooter?: boolean
}

const MenuItems = ({ onFooter }: MenuItemsProps) => {
  return (
    <MenuItemsWrapper onFooter={onFooter}>
      {menuItems.map((menuItem) => (
        <MenuItem onFooter={onFooter} key={menuItem.label} {...menuItem} />
      ))}
    </MenuItemsWrapper>
  )
}

export default MenuItems
