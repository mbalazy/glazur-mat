import styled, { css } from 'styled-components'

export type HeroWrapperProps = {
  height?: number
  isOnHome?: boolean
}

export const HeroWrapper = styled.div<HeroWrapperProps>`
  height: ${({ height }) => height + 'vh'};
  position: relative;

  ${({ theme: { down, breakpoints }, isOnHome }) => css`
    ${down(breakpoints.l)} {
      top: ${({ theme }) => theme.dimensions.superNavbarHeightOnMobile};
      height: ${() => (isOnHome ? '60vh' : '80vh')};
    }
  `}
`

export const HeroImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
