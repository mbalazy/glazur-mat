import styled, { css } from 'styled-components'
import { hoverEffect } from '../../../theme/mainTheme'
import { ImageWrapper } from '../../molecues/RealizationThumblail/RealizationThumbnail.style'

export const GalleryImageStyles = styled(ImageWrapper)`
  ${({ theme: { up, breakpoints } }) => css`
    ${up(breakpoints.l)} {
      ${hoverEffect}
    }
  `}
  border: none;
`
