import styled, { css } from 'styled-components'
import { SocialMediaIconsProp } from './SocialMediaIcons'

export const SocialMediaIconsWrapper = styled.div<SocialMediaIconsProp>`
  display: flex;
  align-items: center;

  ${({ isBrighter }) =>
    isBrighter &&
    css`
      * {
        filter: brightness(2.2);
      }
    `}

  & > * :not(:last-child) {
    margin-right: 2.4rem;
  }
`
