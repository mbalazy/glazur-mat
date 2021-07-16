import React from 'react'
import Image from 'next/image'
import { FooterContent, FooterImageOverlay, FooterWrapper } from './Footer.style'
import FooterContact from '../../molecues/FooterStuff/FooterContact'
import FooterServices from '../../molecues/FooterStuff/FooterServices'
import FooterSocialMedia from '../../molecues/FooterStuff/FooterSocialMedia'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterImageOverlay>
        <Image
          src="/footer.jpg"
          quality={90}
          priority
          alt="marmur"
          layout="fill"
          objectFit="cover"
        />
      </FooterImageOverlay>
      <FooterContent>
        <FooterContact />
        <FooterServices />
        <FooterSocialMedia />
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer
