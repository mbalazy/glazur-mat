import styled from 'styled-components'

export const ButtonStyles = styled.button`
  border: none;
  cursor: pointer;
  display: inline-block;

  padding: 2.4rem 7rem;
  font-size: ${({ theme }) => theme.fontSize.l};

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  justify-self: center;
`
