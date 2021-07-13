import styled, { css } from 'styled-components'

export const TestimonialsWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      flex-direction: column;
    }
  `}
`
