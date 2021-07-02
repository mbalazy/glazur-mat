import styled, { css } from 'styled-components'

export const ButtonBaseStyles = css`
  border: none;
  cursor: pointer;
  display: inline-block;

  padding: 2.4rem 7rem;
  font-size: ${({ theme }) => theme.fontSize.l};

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  justify-self: center;
`
export const ButtonStyles = styled.button`
  ${ButtonBaseStyles}
`
