import styled, { css } from 'styled-components'
import { H1, P } from '../../../theme/Typography'

export const HeroContentBoxWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-100%, -50%);

  width: 40vw;

  padding: 8rem;
  background: rgba(0, 0, 0, 0.64);
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
