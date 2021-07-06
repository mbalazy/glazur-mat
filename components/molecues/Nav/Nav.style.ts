import styled from 'styled-components'

export const NavWrapper = styled.nav`
  height: 8rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.overlay};

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`
