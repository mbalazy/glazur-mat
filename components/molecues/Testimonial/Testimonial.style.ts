import styled from 'styled-components'

export const TestimonialWrapper = styled.div`
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  align-content: space-between;
  justify-items: center;
  gap: 3rem;

  flex: 1;
  margin: 1rem;
`
export const TestimonialContent = styled.span`
  text-align: center;
`

export const TestimonialName = styled.p`
  font-style: italic;
  font-weight: 700;
`
