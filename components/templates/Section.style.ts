import styled, { css } from 'styled-components'
import { H2 } from '../../theme/Typography'
import type { SectionProps } from './Section'

type SectionWrapperProps = {
  isGray: SectionProps['isGray']
}

export const SectionWrapper = styled.section<SectionWrapperProps>`
  display: grid;
  align-items: center;
  justify-content: center;

  padding: 10rem;
  background-color: ${({ theme }) => theme.colors.background};

  ${({ isGray }) =>
    isGray &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
    `}
`
export const Heading = styled(H2)`
  text-align: center;
`

export const Subheading = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.4;
  margin-top: 2.5rem;
  text-align: center;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      margin: 0 6%;
    }
  `}
`

export const ChildrenWrapper = styled.div`
  margin-top: 8rem;
  width: 80vw;
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};

  display: grid;
  gap: 8rem;
`
