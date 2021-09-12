import React from 'react'
import { HandWritten } from '../../../theme/Typography'
import styled from 'styled-components'

export const FooterSignatureWrapper = styled.div`
  ${HandWritten}
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 6rem;
  text-align: center;
`

const FooterSigneture = () => {
  return <FooterSignatureWrapper>designed & coded with ❤ by mbalazy</FooterSignatureWrapper>
}

export default FooterSigneture
