import styled from 'styled-components'

export const SiteInProgressWrapper = styled.div`
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.tertinary};
  color: ${({ theme }) => theme.colors.white};

  h3 {
    margin-right: 1.4rem;
  }
`
