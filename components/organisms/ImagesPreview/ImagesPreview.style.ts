import styled from 'styled-components'

export const ImagesPreviewWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 14rem;
`
export const MainImage = styled.div`
  position: relative;
`
export const RestImages = styled.div`
  margin-top: 2rem;
  overflow-x: auto;

  display: flex;
  justify-content: center;
`
export const SmallImageWrapper = styled.button`
  cursor: pointer;
  position: relative;
  width: 12rem;

  border: 2px solid transparent;
  background-color: transparent;
  transition: border 0.2s;

  &:hover,
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
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
