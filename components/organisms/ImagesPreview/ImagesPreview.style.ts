import styled from 'styled-components'

export const ImagesPreviewWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const MainImage = styled.div`
  position: relative;
  height: 100%;
`
export const RestImages = styled.div`
  position: relative;
  height: 14rem;
  margin-top: 2rem;
  overflow-x: auto;

  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 2rem;
`
export const SmallImageWrapper = styled.button`
  position: relative;
  height: 100%;
  width: 20rem;

  border: 2px solid transparent;
  background-color: transparent;

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
