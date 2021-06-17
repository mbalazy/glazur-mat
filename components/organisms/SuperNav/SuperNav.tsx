import Logo from '../../atoms/Logo/Logo'
import MailInfo from '../../molecues/ContactInfo/MailInfo'
import PhoneInfo from '../../molecues/ContactInfo/PhoneInfo'
import SocialMediaIcons from '../../molecues/SocialMediaIcons/SocialMediaIcons'
import { SuperNavInnerWrapper, SuperNavWrapper } from './SuperNav.style'

const SuperNav = () => {
  return (
    <SuperNavWrapper>
      <SuperNavInnerWrapper>
        <Logo />
        <PhoneInfo />
        <MailInfo />
        <SocialMediaIcons />
      </SuperNavInnerWrapper>
    </SuperNavWrapper>
  )
}

export default SuperNav
