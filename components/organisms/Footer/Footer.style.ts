import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  color: ${({ theme }) => theme.colors.background};
  position: relative;
  height: 55rem;
`

export const FooterImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const FooterContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`
