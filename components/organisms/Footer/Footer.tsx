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
        <div>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
          <p>Footer</p>
        </div>
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer
