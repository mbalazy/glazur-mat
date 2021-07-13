import styled from 'styled-components'

export const MobileMenuIconWrapper = styled.button`
  padding: 3rem 2rem;
  border: none;
  cursor: pointer;
  display: inline-block;
  background-color: transparent;
`
export const MobileMenuIconLines = styled.div`
  width: 5rem;
  height: 0.4rem;
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.black};
  }

  &:before {
    transform: translate(-50%, -1.2rem);
  }
  &:after {
    transform: translate(-50%, 1.2rem);
  }
`
