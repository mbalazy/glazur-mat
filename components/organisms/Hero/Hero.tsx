import Image from 'next/image'
import heroImg from '../../../public/hero3.jpg'
import { HeroImage, NavStyles } from './HeroBackgroundImage.style'
import { HeroWrapper, Heading, Copy, ContentBoxStyles } from './Hero.style'

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroImage>
        <Image src={heroImg} alt="kuchnia" layout="fill" objectFit="cover" />
      </HeroImage>

      <NavStyles>a</NavStyles>

      <ContentBoxStyles>
        <Heading>Glazur-Mat</Heading>
        <Copy>Świadczymy profesjonalne usługi z zakresu prac budowlanych i wykończeniowych.</Copy>
      </ContentBoxStyles>
    </HeroWrapper>
  )
}

export default Hero
