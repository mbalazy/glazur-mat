import styled, { css } from 'styled-components'
import { H1, P } from '../../../theme/Typography'

export type HeroContentBoxWrapperProps = {
  isFullWidth?: boolean
}

export const HeroContentBoxWrapper = styled.div<HeroContentBoxWrapperProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -50%);
  width: 40vw;
  padding: 8rem;
  background: ${({ theme }) => theme.colors.overlay};
  color: ${({ theme }) => theme.colors.background};

  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 80vw;
      transform: translate(-50%, -40%);
      padding: 4rem;
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
  font-size: ${({ theme }) => theme.fontSize.xxl};
  white-space: pre-line;

  ${({ theme: { down, breakpoints }, isFullWidth }) => css`
    ${down(breakpoints.l)} {
      font-size: ${({ theme }) => (isFullWidth ? theme.fontSize.m : theme.fontSize.l)};
    }
  `}
`
