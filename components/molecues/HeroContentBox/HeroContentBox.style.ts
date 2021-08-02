import styled, { css } from 'styled-components'
import { H1, P } from '../../../theme/Typography'

export type HeroContentBoxWrapperProps = {
  isFullWidth?: boolean
}

export const HeroContentBoxWrapper = styled.div<HeroContentBoxWrapperProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -40%);
  width: 40vw;
  padding: 4rem;
  background: ${({ theme }) => theme.colors.overlay};
  color: ${({ theme }) => theme.colors.background};

  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 80vw;
      transform: translate(-50%, -33%);
      padding: 3rem;
    `}

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      width: 80vw;
      transform: translate(-50%, -50%);
      padding: 4rem;
    }
  `}
`
export const Heading = styled(H1)<HeroContentBoxWrapperProps>`
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSize.mega};

  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xxl};
    `}
`
export const Copy = styled(P)<HeroContentBoxWrapperProps>`
  font-size: clamp(1.4rem, 1.4vw, 2.5rem);
  white-space: pre-line;
`
