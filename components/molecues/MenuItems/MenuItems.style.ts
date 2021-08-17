import styled, { css } from 'styled-components'
import { MenuItemsProps } from './MenuItems'

export const MenuItemsWrapper = styled.ul<MenuItemsProps>`
  display: flex;
  ${({ onMobileMenu }) =>
    onMobileMenu &&
    css`
      justify-content: space-evenly;
      height: 100%;
    `}

  ${({ onFooter, onMobileMenu }) =>
    (onFooter || onMobileMenu) &&
    css`
      flex-direction: column;
    `}
`
