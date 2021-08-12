import React from 'react'
import { FooterContent, FooterImageOverlay, FooterWrapper } from './Footer.style'
import FooterContact from '../../molecues/FooterStuff/FooterContact'
import FooterServices from '../../molecues/FooterStuff/FooterServices'
import FooterSocialMedia from '../../molecues/FooterStuff/FooterSocialMedia'
import ImageCoverFit from '../../atoms/Image/ImageCoverFit'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterImageOverlay>
        <ImageCoverFit src="/footer.jpg" quality={90} alt="marmur" priority />
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
