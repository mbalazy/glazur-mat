import Image from 'next/image'
import { HeroWrapper, HeroImageOverlay, HeroWrapperProps } from './Hero.style'
import Nav from '../../molecues/Nav/Nav'
import HeroContentBox, { HeroContentBoxProps } from '../../molecues/HeroContentBox/HeroContentBox'

type HeroProps = {
  imageSrc?: string
  alt?: string
} & HeroContentBoxProps &
  HeroWrapperProps

const Hero = ({ imageSrc = '/hero3.jpg', alt = 'kuchnia', height = 65, ...rest }: HeroProps) => {
  return (
    <HeroWrapper height={height}>
      <HeroImageOverlay>
        <Image src={imageSrc} alt={alt} layout="fill" objectFit="cover" />
      </HeroImageOverlay>
      <Nav />
      <HeroContentBox {...rest} />
    </HeroWrapper>
  )
}

export default Hero
