import styled, { css } from 'styled-components'
import { ButtonBaseStyles as LikeAButtonStyles } from '../Button/Button.style'
type LinkStylesProps = {
  simpler?: boolean
}

export const LinkStyles = styled.a<LinkStylesProps>`
  ${LikeAButtonStyles}

  ${({ simpler }) =>
    simpler &&
    css`
      background-color: transparent;
      padding: 0.6rem 3rem;
      margin: 0.1rem;
      &:hover {
        border: 1px solid #fff;
      }
    `}
`
