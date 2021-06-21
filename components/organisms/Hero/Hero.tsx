import Image from 'next/image'
import heroImg from '../../../public/hero3.jpg'
import { HeroWrapper, Heading, Copy, ContentBoxStyles, HeroImage } from './Hero.style'
import Nav from '../../molecues/Nav/Nav'

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroImage>
        <Image src={heroImg} alt="kuchnia" layout="fill" objectFit="cover" />
      </HeroImage>

      <Nav />

      <ContentBoxStyles>
        <Heading>Glazur-Mat</Heading>
        <Copy>Świadczymy profesjonalne usługi z zakresu prac budowlanych i wykończeniowych.</Copy>
      </ContentBoxStyles>
    </HeroWrapper>
  )
}

export default Hero
