import React from 'react'
import Image from 'next/image'
import { FooterContent, FooterImageOverlay, FooterWrapper } from './Footer.style'
import FooterContact from '../../molecues/FooterStuff/FooterContact'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterImageOverlay>
        <Image src="/footer.jpg" alt="marmur" layout="fill" objectFit="cover" />
      </FooterImageOverlay>
      <FooterContent>
        <FooterContact />
        <p>Footer services</p>
        <p>Footer social media</p>
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer
