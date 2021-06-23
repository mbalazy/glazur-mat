import Logo from '../../atoms/Logo/Logo'
import MailInfo from '../../molecues/ContactInfo/MailInfo'
import PhoneInfo from '../../molecues/ContactInfo/PhoneInfo'
import SocialMediaIcons from '../../molecues/SocialMediaIcons/SocialMediaIcons'
import { SuperNavInnerWrapper, SuperNavWrapper } from './SuperNav.style'
import styled, { css } from 'styled-components'

const LogoStyles = styled(Logo)`
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      height: 50px;
    }
  `}
`

const SuperNav = () => {
  return (
    <SuperNavWrapper>
      <SuperNavInnerWrapper>
        <LogoStyles />
        <PhoneInfo />
        <MailInfo />
        <SocialMediaIcons />
      </SuperNavInnerWrapper>
    </SuperNavWrapper>
  )
}

export default SuperNav
