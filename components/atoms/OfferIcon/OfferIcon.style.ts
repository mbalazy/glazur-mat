import styled from 'styled-components'
import { H3 } from '../../../theme/Typography'

export const OfferIconWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 2rem;
  }
`
export const OfferIconName = styled(H3)`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-transform: uppercase;
  font-weight: 500;
`
