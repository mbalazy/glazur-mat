import React from 'react'
import {
  Copy,
  Heading,
  HeroContentBoxWrapper,
  HeroContentBoxWrapperProps,
} from './HeroContentBox.style'

export type HeroContentBoxProps = {
  heading?: string
  subheading?: string
} & HeroContentBoxWrapperProps

const HeroContentBox = ({
  heading = 'Glazur-Mat',
  subheading = 'Świadczymy profesjonalne usługi z zakresu prac budowlanych i wykończeniowych.',
  isFullWidth,
}: HeroContentBoxProps) => {
  return (
    <HeroContentBoxWrapper isFullWidth={isFullWidth}>
      <Heading>{heading}</Heading>
      <Copy>{subheading}</Copy>
    </HeroContentBoxWrapper>
  )
}

export default HeroContentBox
