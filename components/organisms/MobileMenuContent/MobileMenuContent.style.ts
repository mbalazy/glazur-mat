import styled, { css } from 'styled-components'
import { MobileMenuIconLinesProps } from '../../atoms/MobileMenuIcon/MobileMenuIcon.style'

export const MobileMenuTransition = css`
  transition: transform 0.12s ease-in-out;
`

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

  transform: translateX(100vw);

  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};

  display: grid;
  align-items: start;
  gap: 1rem;

  ${MobileMenuTransition}

  ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen &&
    css`
      transform: translateX(0);
    `}
`
