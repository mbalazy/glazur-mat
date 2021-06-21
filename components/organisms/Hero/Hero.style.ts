import styled from 'styled-components'

export const HeroWrapper = styled.div`
  height: calc(100vh - ${({ theme }) => theme.dimensions.superNavbarHeight});
  position: relative;
`

export const HeroImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
