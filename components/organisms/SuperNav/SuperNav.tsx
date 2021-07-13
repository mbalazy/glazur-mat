import MailInfo from '../../molecues/ContactInfo/MailInfo'
import PhoneInfo from '../../molecues/ContactInfo/PhoneInfo'
import SocialMediaIcons from '../../molecues/SocialMediaIcons/SocialMediaIcons'
import { LogoStyles, SuperNavInnerWrapper, SuperNavWrapper } from './SuperNav.style'

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
