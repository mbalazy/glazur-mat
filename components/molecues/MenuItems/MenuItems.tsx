import { menuItems } from '../../../theme/businessInfo'
import MenuItem from '../../atoms/MenuItem/MenuItem'
import { MenuItemsWrapper } from './MenuItems.style'

const MenuItems = () => {
  return (
    <MenuItemsWrapper>
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.label} {...menuItem} />
      ))}
    </MenuItemsWrapper>
  )
}

export default MenuItems
