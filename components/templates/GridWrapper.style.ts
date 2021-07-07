import styled from 'styled-components'

export const GridWrapper = styled.div`
  width: 80vw;
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
  margin: 0 auto;

  display: grid;
  gap: 7rem;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
`
