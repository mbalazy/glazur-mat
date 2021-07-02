import styled, { css } from 'styled-components'
import type { SectionProps } from './Section'

type SectionWrapperProps = {
  isGray: SectionProps['isGray']
}

export const SectionWrapper = styled.section<SectionWrapperProps>`
  display: grid;
  align-items: center;
  justify-content: center;

  padding: 7rem;
  text-align: center;

  ${({ isGray }) =>
    isGray &&
    css`
      background-color: red;
    `}
`
export const Subheading = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.4;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      margin: 0 6%;
    }
  `}
`

export const ChildrenWrapper = styled.div`
  margin-top: 4rem;
  width: 90vw;
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
`
