import styled, { css } from 'styled-components'
import { hoverEffect } from '../../../theme/mainTheme'
import { ImageWrapper } from '../../molecues/RealizationThumblail/RealizationThumbnail.style'

export const GalleryImageStyles = styled(ImageWrapper)`
  ${({ theme: { up, breakpoints } }) => css`
    ${up(breakpoints.l)} {
      ${hoverEffect}
      border: 3px solid transparent;

      &:hover {
        border: 3px solid ${({ theme }) => theme.colors.primary};
      }
      &:active {
        border: 3px solid ${({ theme }) => theme.colors.primary};
      }
    }
  `}
  border: none;
`
