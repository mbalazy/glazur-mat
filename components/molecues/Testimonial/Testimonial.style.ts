import styled, { css } from 'styled-components'
import useWindowDimensions from '../../../lib/useWindowDimensions'

export type TestimonialWrapperStyledProps = {
  position: number
}

// additional position styles for testimonials
const offset = '-3rem'

const leftTestimonial = css`
  margin-right: ${offset};
`
const centerTestimonial = css`
  background-color: ${({ theme }) => theme.colors.tertinary};
  color: ${({ theme }) => theme.colors.background};
  padding: 3rem 5rem;

  position: relative;
  top: ${offset};
`
const rightTestimonial = css`
  margin-left: ${offset};
`

const apllyPositionStyles = (position: number) => {
  switch (position) {
    case 0:
      return leftTestimonial
    case 1:
      return centerTestimonial
    case 2:
      return rightTestimonial

    default:
      break
  }
}

export const TestimonialWrapper = styled.div<TestimonialWrapperStyledProps>`
  flex: 1;
  padding: 3rem 5rem;
  background-color: ${({ theme }) => theme.colors.background};

  display: grid;
  align-content: space-between;
  justify-items: center;
  gap: 3rem;

  box-shadow: ${({ theme }) => theme.boxShadow};

  // apply additional testimonial styles on +900px window width
  // or add gap on -900px window width
  ${({ position }) => {
    const { width } = useWindowDimensions()
    if (width !== undefined && width > 900) {
      return apllyPositionStyles(position)
    } else {
      return css`
        & :not(:last-child) {
          margin-bottom: 4rem;
        }
      `
    }
  }}
`
export const TestimonialContent = styled.span`
  text-align: center;
`

export const TestimonialName = styled.p`
  font-style: italic;
  font-weight: 700;
`
