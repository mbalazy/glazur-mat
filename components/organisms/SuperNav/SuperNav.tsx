import Logo from '../../atoms/Logo'
import MailInfo from '../../molecues/ContactInfo/MailInfo'
import PhoneInfo from '../../molecues/ContactInfo/PhoneInfo'
import { SuperNavInnerWrapper, SuperNavWrapper } from './SuperNav.style'

const SuperNav = () => {
  return (
    <SuperNavWrapper>
      <SuperNavInnerWrapper>
        <Logo />
        <PhoneInfo />
        <MailInfo />
        <p>sociale</p>
      </SuperNavInnerWrapper>
    </SuperNavWrapper>
  )
}

export default SuperNav
