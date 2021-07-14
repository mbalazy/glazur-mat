import styled from 'styled-components'

export const MobileMenuContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  height: 100vh;
  width: 100%;

  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};
`
