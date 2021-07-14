import styled, { css } from 'styled-components'

export const MobileMenuWrapper = styled.div`
  display: flex;

  ${({ theme: { up, breakpoints } }) => css`
    ${up(breakpoints.l)} {
      display: none;
    }
  `}
`
