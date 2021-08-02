import styled, { css } from 'styled-components'

export const FeatureWrapper = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr 1fr;
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      grid-template-columns: 1fr;
    }
  `}

  & > div {
    position: relative;
    height: 40rem;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`
export const FeatureText = styled.div`
  ${({ theme: { up, breakpoints } }) => css`
    ${up(breakpoints.l)} {
      // grid-column: 2 / span 1;
      grid-row: 1;
    }
  `}
`
export const FeatureImageWrapper = styled.div`
  width: 100%;
  ${({ theme: { up, breakpoints } }) => css`
    ${up(breakpoints.l)} {
      // grid-column: 1 / span 1;
      grid-row: 1;
    }
  `}
`
