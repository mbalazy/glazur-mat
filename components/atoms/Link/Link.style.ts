import styled, { css } from 'styled-components'

type LinkVariants = 'simpler' | 'outline'

export type LinkStylesProp = {
  variant?: LinkVariants
  activeRoute?: boolean
}

export const LinkStyles = styled.a<LinkStylesProp>`
  display: inline-block;
  cursor: pointer;
  padding: 2.4rem 7rem;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  justify-self: center;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 36px 56px -8px rgba(0, 0, 0, 0.1);

  transition: all 0.12s;

  &:hover {
    transform: scale(1.02) translateY(-4px);
    box-shadow: 0px 36px 56px -8px rgba(0, 0, 0, 0.14);
  }
  &:active {
    transform: scale(1) translateY(0px);
    box-shadow: 0px 36px 56px -8px rgba(0, 0, 0, 0.1);
  }

  ${({ variant }) => {
    switch (variant) {
      case 'simpler':
        return css`
          background-color: transparent;
          padding: 0.6rem 3rem;
          &:hover {
            border: 1px solid #fff;
          }
        `
      case 'outline':
        return css`
          background-color: transparent;
          padding: 1.2rem 4rem;
          margin: 0 0.8rem;

          ${({ activeRoute }) =>
            activeRoute &&
            css`
              background-color: ${({ theme }) => theme.colors.primary};
            `}

          &:hover {
            background-color: ${({ theme }) => theme.colors.primary};
          }
        `

      default:
        break
    }
  }}
`
