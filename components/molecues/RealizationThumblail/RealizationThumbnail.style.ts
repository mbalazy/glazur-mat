import styled from 'styled-components'
import { hoverEffect } from '../../../theme/mainTheme'
import { HandWritten } from '../../../theme/Typography'

export const RealizationThumbnailWrapper = styled.a`
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: 43rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${hoverEffect}
`
export const ImageWrapper = styled.div`
  height: 27rem;
  width: 100%;
  position: relative;
`
export const DecoratedLine = styled.div`
  width: 12rem;
  height: 2px;
  margin: 3.4rem 0 3rem;
  background-color: ${({ theme }) => theme.colors.black};
`
export const RealizationName = styled.span`
  ${HandWritten}
  margin: 0 3rem;
  text-align: center;
`
