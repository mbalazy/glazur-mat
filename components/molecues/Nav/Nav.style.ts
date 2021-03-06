import styled, { css } from 'styled-components'

export const NavWrapper = styled.nav`
  height: 8rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.overlay};

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      display: none;
    }
  `}
`
