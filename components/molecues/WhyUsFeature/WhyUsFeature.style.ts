import styled, { css } from 'styled-components'
import { HandWritten } from '../../../theme/Typography'

type FeatureTextProps = {
  isTextOnRight: boolean
}

export const FeatureWrapper = styled.div`
  display: grid;
  gap: 10rem;
  grid-template-columns: 1fr 1fr;
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      grid-template-columns: 1fr;
    }
  `}

  & > div {
    position: relative;
    height: 40rem;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`
export const FeatureText = styled.div<FeatureTextProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  padding: 3rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};

  h3 {
    ${HandWritten};
    margin-bottom: 3rem;
    font-size: 2.4rem;
    font-weight: 500;
  }

  ${({ theme: { up, breakpoints }, isTextOnRight }) => css`
    ${up(breakpoints.l)} {
      ${isTextOnRight &&
      css`
        grid-column: 2 / span 1;
      `}
      grid-row: 1;
    }
  `}
`
export const FeatureImageWrapper = styled.div`
  width: 100%;
  ${({ theme: { up, breakpoints } }) => css`
    ${up(breakpoints.l)} {
      grid-row: 1;
    }
  `}
`
