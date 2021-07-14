import styled, { css } from 'styled-components'
import { MobileMenuIconLinesProps } from '../../atoms/MobileMenuIcon/MobileMenuIcon.style'

export const MobileMenuContentWrapper = styled.div<MobileMenuIconLinesProps>`
  position: fixed;
  top: ${({ theme }) => theme.dimensions.superNavbarHeightOnMobile};
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  height: 100vh;
  width: 100%;
  padding: 2.5rem 5%;

  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};

  display: grid;
  align-items: start;
  justify-items: center;

  ${({ isMobileMenuOpen }) =>
    !isMobileMenuOpen &&
    css`
      display: none;
    `}
`
