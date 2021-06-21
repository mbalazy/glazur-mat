import styled from 'styled-components'
import { H1, P } from '../../../theme/Typography'

export const HeroWrapper = styled.div`
  height: calc(100vh - ${({ theme }) => theme.dimensions.superNavbarHeight});
  position: relative;
`

export const HeroImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const Heading = styled(H1)`
  margin-bottom: 2rem;
`
export const Copy = styled(P)`
  font-size: ${({ theme }) => theme.fontSize.xl};
`
export const ContentBoxStyles = styled.div`
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
