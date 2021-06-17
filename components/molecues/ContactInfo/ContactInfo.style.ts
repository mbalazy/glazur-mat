import styled from 'styled-components'

export const ContactInfoWrapper = styled.div`
  display: flex;
`
export const ContactInfoIcon = styled.img`
  margin-right: 2.5rem;
`
export const ContactInfoLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.primary};

  display: inline-block;
  margin-bottom: 0.7rem;
`
