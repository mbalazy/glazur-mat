import styled, { css } from 'styled-components'
import { ButtonBaseStyles as LikeAButtonStyles } from '../Button/Button.style'

type LinkVariants = 'simpler' | 'outline'

export type LinkStylesProp = {
  variant?: LinkVariants
}

export const LinkStyles = styled.a<LinkStylesProp>`
  ${LikeAButtonStyles}

  ${({ variant }) => {
    switch (variant) {
      case 'simpler':
        return css`
          background-color: transparent;
          padding: 0.6rem 3rem;
          margin: 0.1rem;
          &:hover {
            border: 1px solid #fff;
          }
        `

      default:
        break
    }
  }}
`
