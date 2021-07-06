import styled from 'styled-components'

export const OfferThumbnailWrapper = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-rows: 3rem 4rem 1fr;
  justify-items: stretch;
  text-align: center;

  padding: 5rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.white};

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 500;
  }
  p {
    text-align: left;
  }
`
