import styled from 'styled-components'

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
`
export const DecoratedLine = styled.div`
  width: 12rem;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.black};
`
export const RealizationName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: IM FELL Great Primer;
  font-style: italic;

  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5rem;
`
