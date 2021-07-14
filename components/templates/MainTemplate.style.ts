import styled, { css } from 'styled-components'

export const HeaderStyles = styled.header`
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      margin-bottom: ${({ theme }) => theme.dimensions.superNavbarHeightOnMobile};
    }
  `}
`
