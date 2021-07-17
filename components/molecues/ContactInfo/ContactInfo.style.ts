import styled from 'styled-components'

export const ContactInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryText};
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
export const MailInfoWrapper = styled.a``
export const PhoneInfoWrapper = styled.a``
