import React from 'react'
import Image from 'next/image'
import heroImg from '../../../public/hero3-full.jpg'
import { HeroWrapper, HeroImageOverlay } from './Hero.style'
import Nav from '../../molecues/Nav/Nav'
import HeroContentBox from '../../molecues/HeroContentBox/HeroContentBox'

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroImageOverlay>
        <Image src={heroImg} alt="kuchniass" layout="fill" objectFit="cover" />
      </HeroImageOverlay>
      {/* <Nav /> */}
      <HeroContentBox />
    </HeroWrapper>
  )
}

export default Hero
