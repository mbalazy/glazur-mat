import React from 'react'
import MailInfo from '../../molecues/ContactInfo/MailInfo'
import PhoneInfo from '../../molecues/ContactInfo/PhoneInfo'
import SocialMediaIcons from '../../molecues/SocialMediaIcons/SocialMediaIcons'
import MobileMenu from '../MobileMenu/MobileMenu'
import { DesktopSection, LogoStyles, SuperNavInnerWrapper, SuperNavWrapper } from './SuperNav.style'

const SuperNav = () => {
  return (
    <SuperNavWrapper>
      <SuperNavInnerWrapper>
        <LogoStyles />
        <DesktopSection>
          <PhoneInfo />
          <MailInfo />
          <SocialMediaIcons />
        </DesktopSection>
        <MobileMenu />
      </SuperNavInnerWrapper>
    </SuperNavWrapper>
  )
}

export default SuperNav
