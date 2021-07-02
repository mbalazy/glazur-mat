import styled, { css } from 'styled-components'

export type TestimonialWrapperStyledProps = {
  position: number
}

const leftSide = css`
  margin-right: -3rem;
`
const centerSide = css`
  background-color: ${({ theme }) => theme.colors.tertinary};
  color: ${({ theme }) => theme.colors.background};
  padding: 3rem 5rem;

  position: relative;
  top: -3rem;
`
const rightSide = css`
  margin-left: -3rem;
`

const addPositionStyles = (position: number) => {
  switch (position) {
    case 0:
      return leftSide
    case 1:
      return centerSide
    case 2:
      return rightSide

    default:
      break
  }
}

export const TestimonialWrapper = styled.div<TestimonialWrapperStyledProps>`
  padding: 3rem 5rem;
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  align-content: space-between;
  justify-items: center;
  gap: 3rem;

  flex: 1;
  box-shadow: 0px 34px 53px -7px rgba(0, 0, 0, 0.11);

  // additional position styles
  ${({ position }) => addPositionStyles(position)}
`
export const TestimonialContent = styled.span`
  text-align: center;
`

export const TestimonialName = styled.p`
  font-style: italic;
  font-weight: 700;
`
