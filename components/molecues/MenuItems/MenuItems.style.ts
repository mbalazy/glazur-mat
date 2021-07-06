import styled, { css } from 'styled-components'
import { MenuItemsProps } from './MenuItems'

export const MenuItemsWrapper = styled.div<MenuItemsProps>`
  display: flex;

  ${({ onFooter }) =>
    onFooter &&
    css`
      flex-direction: column;
    `}
`
