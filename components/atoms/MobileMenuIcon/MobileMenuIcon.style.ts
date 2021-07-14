import styled, { css } from 'styled-components'
import { MobileMenuContext } from '../../../lib/mobileMenuContext'

export type MobileMenuIconLinesProps = {
  isMobileMenuOpen: MobileMenuContext['isMobileMenuOpen']
}

export const MobileMenuIconWrapper = styled.button`
  padding: 3rem 2rem;
  border: none;
  cursor: pointer;
  display: inline-block;
  background-color: transparent;
`

export const MobileMenuIconLines = styled.div<MobileMenuIconLinesProps>`
  width: 5rem;
  height: 0.4rem;
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;

  ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen &&
    css`
      background-color: transparent;
    `}

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.black};
  }

  &:before {
    transform: translate(-50%, -1.2rem);
    ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen &&
      css`
        transform: translateX(-50%) rotate(45deg);
      `}
  }
  &:after {
    transform: translate(-50%, 1.2rem);
    ${({ isMobileMenuOpen }) =>
      isMobileMenuOpen &&
      css`
        transform: translateX(-50%) rotate(-45deg);
      `}
  }
`
