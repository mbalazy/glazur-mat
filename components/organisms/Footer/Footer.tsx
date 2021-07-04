import React from 'react'
import Image from 'next/image'
import { FooterContent, FooterImageOverlay, FooterWrapper } from './Footer.style'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterImageOverlay>
        <Image src="/footer.jpg" alt="marmur" layout="fill" objectFit="cover" />
      </FooterImageOverlay>
      <FooterContent>
        <p>Footer contact</p>
        <p>Footer services</p>
        <p>Footer social media</p>
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer
