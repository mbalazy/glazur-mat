import styled, { css } from 'styled-components'
import { H2, HandWritten } from '../../theme/Typography'

export const FooterSectionWrapper = styled.section`
  margin-top: 3rem;
  flex: 1;

  display: grid;
  gap: 1.8rem;
  flex-direction: column;
  justify-items: center;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      flex: 0;
    }
  `}
`
export const FooterSubheading = styled.p`
  ${HandWritten}
  font-size: ${({ theme }) => theme.fontSize.m};
`
export const FooterHeading = styled(H2)`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-transform: uppercase;
`
export const FooterSectionContent = styled.div`
  font-weight: 700;
  text-align: center;
`
