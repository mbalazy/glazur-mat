import React from 'react'
import { Copy, Heading, HeroContentBoxWrapper } from './HeroContentBox.style'

export type HeroContentBoxProps = {
  heading?: string
  subheading?: string
}

const HeroContentBox = ({
  heading = 'Glazur-Mat',
  subheading = 'Świadczymy profesjonalne usługi z zakresu prac budowlanych i wykończeniowych.',
}: HeroContentBoxProps) => {
  return (
    <HeroContentBoxWrapper>
      <Heading>{heading}</Heading>
      <Copy>{subheading}</Copy>
    </HeroContentBoxWrapper>
  )
}

export default HeroContentBox
