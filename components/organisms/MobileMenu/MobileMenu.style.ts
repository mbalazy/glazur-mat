import styled, { css } from 'styled-components'

export const MobileMenuWrapper = styled.div`
  ${({ theme: { up, breakpoints } }) => css`
    ${up(breakpoints.l)} {
      display: none;
    }
  `}
`
