import styled from 'styled-components'

export const OfferDetailStyles = styled.p`
  margin-bottom: 1.4rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    background-color: #000000;
    display: block;
    width: 3px;
    height: 3px;
    z-index: 1;
    left: -8px;
  }
`
