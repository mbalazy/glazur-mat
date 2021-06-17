import styled from 'styled-components'

export const SuperNavWrapper = styled.div`
  height: 12rem;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0 4rem;
`
export const SuperNavInnerWrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};

  display: flex;
  justify-content: space-between;
  align-items: center;
`
