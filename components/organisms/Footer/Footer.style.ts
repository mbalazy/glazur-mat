import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  color: ${({ theme }) => theme.colors.background};
  position: relative;
  min-height: 52rem;
`

export const FooterImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const FooterContent = styled.div`
  padding: 10rem;
  position: absolute;
  top: 0;
  left: 0;
`
