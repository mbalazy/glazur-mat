import styled from 'styled-components'

export const ImagesPreviewWrapper = styled.div`
  width: 90vw;
  height: 92%;
  display: flex;
  flex-direction: column;
`
export const MainImage = styled.div`
  position: relative;
  height: 100%;
`
export const RestImagesWrapper = styled.div`
  position: relative;
  height: 7rem;
  display: flex;
`
export const SmallImageWrapper = styled.button`
  margin-top: 2rem;
  height: 10rem;
  width: 100%;
  position: relative;
`
export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  background-color: transparent;
  top: 2rem;
  right: 3rem;
  padding: 3rem;
  border: 2px solid transparent;
  transition: border 0.14s;

  &:hover,
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.black};
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 3px;
    height: 70%;
    background: ${({ theme }) => theme.colors.black};
  }

  &:before {
    transform: translateY(-50%) rotate(45deg);
  }
  &:after {
    transform: translateY(-50%) rotate(-45deg);
  }
`
