import styled, { css } from 'styled-components'

type GridWrapperProps = {
  isFullWidth?: boolean
}

export const GridWrapper = styled.div<GridWrapperProps>`
  width: 80vw;
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
  margin: 0 auto;

  display: grid;
  gap: 7rem;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));

  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 97vw;
    `}
`
