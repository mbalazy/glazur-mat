import { HeroWrapper, HeroImageOverlay, HeroWrapperProps } from './Hero.style'
import Nav from '../../molecues/Nav/Nav'
import HeroContentBox, { HeroContentBoxProps } from '../../molecues/HeroContentBox/HeroContentBox'
import ImageCoverFit from '../../atoms/Image/ImageCoverFit'

export type HeroProps = {
  imageSrc?: string
  alt?: string
} & HeroContentBoxProps &
  HeroWrapperProps

const Hero = ({
  imageSrc = '/hero3.jpg',
  alt = 'kuchnia',
  height = 65,
  isOnHome = false,
  ...rest
}: HeroProps) => {
  return (
    <HeroWrapper height={height} isOnHome={isOnHome}>
      <HeroImageOverlay>
        <ImageCoverFit src={imageSrc} alt={alt} priority />
      </HeroImageOverlay>
      <Nav />
      <HeroContentBox {...rest} />
    </HeroWrapper>
  )
}

export default Hero
