import styled, { css } from 'styled-components'
import Logo from '../../atoms/Logo/Logo'
import { MailInfoWrapper, PhoneInfoWrapper } from '../../molecues/ContactInfo/ContactInfo.style'
import { SocialMediaIconsWrapper as SocialMediaIcons } from '../../molecues/SocialMediaIcons/SocialMediaIcons.style'

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

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.xl)} {
      padding: 0 3rem;
    }
  `}

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      ${SocialMediaIcons} {
        display: none;
      }
      ${MailInfoWrapper} {
        display: none;
      }
    }
  `}

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      ${PhoneInfoWrapper} {
        display: none;
      }
    }
  `}
`

export const LogoStyles = styled(Logo)`
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      height: 50px;
    }
  `}
`
