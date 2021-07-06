import styled from 'styled-components'

export const OfferThumbnailWrapper = styled.div`
  display: grid;
  gap: 2rem;
  justify-items: stretch;
  text-align: center;
  align-items: start;

  padding: 4rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.white};

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 500;
  }
  p {
    text-align: left;
    align-self: end;
  }
`
