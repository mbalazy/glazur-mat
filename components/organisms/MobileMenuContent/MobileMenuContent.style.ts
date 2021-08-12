import styled, { css } from 'styled-components'
import { MobileMenuIconLinesProps } from '../../atoms/MobileMenuIcon/MobileMenuIcon.style'

export const MobileMenuTransition = css`
  transition: transform 0.16s ease-in-out;
`

export const MobileMenuContentWrapper = styled.div<MobileMenuIconLinesProps>`
  position: fixed;
  top: ${({ theme }) => theme.dimensions.superNavbarHeightOnMobile};
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.dimensions.superNavbarHeightOnMobile});
  min-height: calc(100vh - ${({ theme }) => theme.dimensions.superNavbarHeightOnMobile});

  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;

  padding: 1.2rem 10% 0;
  padding-bottom: 5vh;

  background-color: ${({ theme }) => theme.colors.background};

  display: grid;
  align-items: center;
  align-content: stretch;

  ${MobileMenuTransition}
  transform: translateX(100vw);

  ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen &&
    css`
      transform: translateX(0);
    `}
`
