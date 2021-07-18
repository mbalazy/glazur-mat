import styled from 'styled-components'

export const ImagesPreviewWrapper = styled.div`
  position: fixed;
  top: 10%;
  left: 10%;
  width: 80vw;
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.overlay};
  display: flex;
  flex-direction: column;
`

export const MainImage = styled.div`
  position: relative;
  height: 80%;
`
export const RestImages = styled.div`
  position: relative;
  height: 10%;
  display: flex;
`
