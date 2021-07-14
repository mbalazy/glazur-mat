import styled, { css } from 'styled-components'

export type HeroWrapperProps = {
  height?: number
}

export const HeroWrapper = styled.div<HeroWrapperProps>`
  height: ${({ height }) => height + 'vh'};
  position: relative;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      top: ${({ theme }) => theme.dimensions.superNavbarHeightOnMobile};
    }
  `}
`

export const HeroImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
