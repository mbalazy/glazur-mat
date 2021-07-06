import styled from 'styled-components'

export type HeroWrapperProps = {
  height?: number
}

export const HeroWrapper = styled.div<HeroWrapperProps>`
  height: ${({ height }) => height + 'vh'};
  position: relative;
`

export const HeroImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
