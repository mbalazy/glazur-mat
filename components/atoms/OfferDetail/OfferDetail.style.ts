import styled from 'styled-components'

export const OfferDetailStyles = styled.li`
  margin-bottom: 1.4rem;
  position: relative;
  text-align: left;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    background-color: ${({ theme }) => theme.colors.black};
    display: block;
    width: 3px;
    height: 4px;
    left: -10px;
  }
`
