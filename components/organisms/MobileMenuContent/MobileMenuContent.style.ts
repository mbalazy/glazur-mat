import styled, { css } from 'styled-components'
import { MobileMenuContentProps } from './MobileMenuContent'

export const MobileMenuContentWrapper = styled.div<MobileMenuContentProps>`
  ${({ isMobileMenuOpen }) =>
    !isMobileMenuOpen &&
    css`
      display: none;
    `}

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  height: 100vh;
  width: 100%;

  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
`
