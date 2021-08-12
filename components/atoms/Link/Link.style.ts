import styled, { css } from 'styled-components'
import { hoverEffect } from '../../../theme/mainTheme'

type LinkVariants = 'simpler' | 'outline' | 'mobile'

export type LinkStylesProp = {
  variant?: LinkVariants
  activeRoute?: boolean
}

export const LinkStyles = styled.a<LinkStylesProp>`
  display: inline-block;
  padding: 2.4rem 5rem;
  margin: 0 -1rem;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  justify-self: center;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 36px 56px -8px rgba(0, 0, 0, 0.1);

  ${hoverEffect}

  ${({ variant, activeRoute }) => {
    switch (variant) {
      case 'simpler':
        return css`
          background-color: transparent;
          padding: 0.6rem 3rem;
          border: 1px solid transparent;
          &:hover {
            border: 1px solid #fff;
          }
        `
      case 'outline':
        return css`
          background-color: transparent;
          padding: 1.2rem 4rem;
          margin: 0 0.8rem;

          &:hover {
            background-color: ${({ theme }) => theme.colors.primary};
          }

          ${activeRoute &&
          css`
            background-color: ${({ theme }) => theme.colors.primary};
            transform: scale(1.02) translateY(-2px);
          `}
        `
      case 'mobile':
        return css`
          text-align: center;
          color: ${({ theme }) => theme.colors.black};
          width: 100%;
          text-transform: uppercase;
          background-color: transparent;
          padding: 1.8rem 0;
          margin: 0.2rem 0;
          font-weight: 500;
          border: 2px solid ${({ theme }) => theme.colors.primary};
        `

      default:
        break
    }
  }}
`
