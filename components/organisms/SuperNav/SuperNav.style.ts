import styled from 'styled-components'

export const SuperNavWrapper = styled.div`
  height: ${({ theme }) => theme.dimensions.superNavbarHeight};
  background-color: ${({ theme }) => theme.colors.background};
`
export const SuperNavInnerWrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};

  display: flex;
  justify-content: space-between;
  align-items: center;
`
