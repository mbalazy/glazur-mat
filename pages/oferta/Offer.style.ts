import styled from 'styled-components'

export const OfferOuterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`

export const OfferWrapperStyles = styled.div`
  width: 80vw;
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
  margin: 0 auto;
  padding: 10rem 0;

  display: grid;
  gap: 7rem;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
`
