import styled, { css } from 'styled-components'

export const ButtonBaseStyles = css`
  border: none;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;

  padding: 2.4rem 7rem;
  font-size: ${({ theme }) => theme.fontSize.l};

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  justify-self: center;

  transition: all 0.12s;
  box-shadow: 0px 36px 56px -8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.02) translateY(-4px);
    box-shadow: 0px 36px 56px -8px rgba(0, 0, 0, 0.14);
  }
  &:active {
    transform: scale(1) translateY(0px);
    box-shadow: 0px 36px 56px -8px rgba(0, 0, 0, 0.1);
  }
`
export const ButtonStyles = styled.button`
  ${ButtonBaseStyles}
`
