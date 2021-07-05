import React from 'react'
import {
  FooterHeading,
  FooterSectionContent,
  FooterSectionWrapper,
  FooterSubheading,
} from './FooterSection.style'

type FooterSectionProps = {
  heading: string
  subheading: string
  icon?: string
  children: JSX.Element | JSX.Element[]
}

const FooterSection = ({ heading, subheading, icon, children }: FooterSectionProps) => {
  return (
    <FooterSectionWrapper>
      <FooterSubheading>{subheading}</FooterSubheading>
      <FooterHeading>{heading}</FooterHeading>
      <img src={icon} alt="" width="32" />
      <FooterSectionContent>{children}</FooterSectionContent>
    </FooterSectionWrapper>
  )
}

export default FooterSection
