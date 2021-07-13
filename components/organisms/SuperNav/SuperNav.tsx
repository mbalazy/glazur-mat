import MailInfo from '../../molecues/ContactInfo/MailInfo'
import PhoneInfo from '../../molecues/ContactInfo/PhoneInfo'
import SocialMediaIcons from '../../molecues/SocialMediaIcons/SocialMediaIcons'
import MobileMenu from '../MobileMenu/MobileMenu'
import { LogoStyles, SuperNavInnerWrapper, SuperNavWrapper } from './SuperNav.style'

const SuperNav = () => {
  return (
    <SuperNavWrapper>
      <SuperNavInnerWrapper>
        <LogoStyles />
        <PhoneInfo />
        <MailInfo />
        <SocialMediaIcons />
        <MobileMenu />
      </SuperNavInnerWrapper>
    </SuperNavWrapper>
  )
}

export default SuperNav
