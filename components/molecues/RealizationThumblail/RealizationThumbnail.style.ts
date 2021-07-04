import styled from 'styled-components'
import { HandWritten } from '../../../theme/Typography'

//TODO change to Link
export const RealizationThumbnailWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: 43rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const ImageWrapper = styled.div`
  height: 27rem;
  width: 100%;
  position: relative;
`
export const DecoratedLine = styled.div`
  width: 12rem;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.black};
`
export const RealizationName = styled.span`
  ${HandWritten}
  margin-bottom: 5rem;
`
