import React from 'react'
import Image from 'next/image'
import { HeroWrapper, HeroImageOverlay } from './Hero.style'
import Nav from '../../molecues/Nav/Nav'
import HeroContentBox from '../../molecues/HeroContentBox/HeroContentBox'

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroImageOverlay>
        <Image src={'/hero3.jpg'} alt="kuchnia" layout="fill" objectFit="cover" />
      </HeroImageOverlay>
      {/* <Nav /> */}
      <HeroContentBox />
    </HeroWrapper>
  )
}

export default Hero
