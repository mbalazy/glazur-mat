import styled, { css } from 'styled-components'

type SmallImageWrapperProps = {
  isActive: boolean
}
const elementsHover = css`
  transition: border 0.2s;

  &:hover,
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`

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
export const SmallImageWrapper = styled.button<SmallImageWrapperProps>`
  cursor: pointer;
  position: relative;
  width: 12rem;

  border: 2px solid transparent;
  background-color: transparent;
  ${elementsHover}

  ${({ isActive }) =>
    isActive &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.primary};
    `}
`
const buttonsStyles = css`
  position: absolute;
  top: 44%;
  padding: 3rem;
  background-color: transparent;
  transition: border 0.2s;
  ${elementsHover}
`
export const NextButton = styled.button`
  ${buttonsStyles}
  right: 3rem;
`
export const PrevButton = styled.button`
  ${buttonsStyles}
  left: 3rem;
`
export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  background-color: transparent;
  top: 2rem;
  right: 3rem;
  padding: 3rem;
  border: 2px solid transparent;
  ${elementsHover}

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
