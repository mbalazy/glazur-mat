import React from 'react'
import {
  FooterContent,
  FooterContentWrapper,
  FooterImageOverlay,
  FooterWrapper,
} from './Footer.style'
import FooterContact from '../../molecues/FooterStuff/FooterContact'
import FooterServices from '../../molecues/FooterStuff/FooterServices'
import FooterSocialMedia from '../../molecues/FooterStuff/FooterSocialMedia'
import ImageCoverFit from '../../atoms/Image/ImageCoverFit'
import FooterSignature from '../../molecues/FooterStuff/FooterSignature'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterImageOverlay>
        <ImageCoverFit src="/footer.jpg" quality={90} alt="marmur" priority />
      </FooterImageOverlay>
      <FooterContentWrapper>
        <FooterContent>
          <FooterContact />
          <FooterServices />
          <FooterSocialMedia />
        </FooterContent>
        <FooterSignature />
      </FooterContentWrapper>
    </FooterWrapper>
  )
}

export default Footer
