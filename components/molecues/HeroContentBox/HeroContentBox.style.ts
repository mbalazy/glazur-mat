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
  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 80vw;
      transform: translate(-50%, -40%);
      padding: 4rem;

      p {
        font-size: ${({ theme }) => theme.fontSize.l};
      }
    `}

  padding: 8rem;
  background: ${({ theme }) => theme.colors.overlay};
  color: ${({ theme }) => theme.colors.background};

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      width: 80vw;
      transform: translate(-50%, -50%);
      padding: 4rem;
    }
  `}
`
export const Heading = styled(H1)`
  margin-bottom: 2rem;
  ${({ theme }) => theme.fontSize.mega};
`
export const Copy = styled(P)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
`
