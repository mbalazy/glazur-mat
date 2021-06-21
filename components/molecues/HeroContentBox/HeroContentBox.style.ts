import styled from 'styled-components'
import { H1, P } from '../../../theme/Typography'

export const HeroContentBoxWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-80%, -50%);

  width: 50%;
  height: 30%;

  background: rgba(0, 0, 0, 0.64);
  color: ${({ theme }) => theme.colors.background};
  padding: 5rem;
`
export const Heading = styled(H1)`
  margin-bottom: 2rem;
`
export const Copy = styled(P)`
  font-size: ${({ theme }) => theme.fontSize.xl};
`
