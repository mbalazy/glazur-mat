import styled, { css } from 'styled-components'
type Props = {
  bigger?: boolean
  smaller?: boolean
}

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.mega};
`
export const H2 = styled.h2<Props>`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  line-height: 1.4;
`
export const H3 = styled.h3<Props>`
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.4;

  ${({ bigger }) =>
    bigger &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xl};
    `}
`
export const P = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.4;
`
export const HandWritten = css`
  font-family: 'IM FELL Great Primer';
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.primary};
`
