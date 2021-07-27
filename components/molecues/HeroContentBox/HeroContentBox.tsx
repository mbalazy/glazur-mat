import React from 'react'
import businessInfo from '../../../theme/businessInfo'
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

const { fullTitle } = businessInfo

const HeroContentBox = ({
  heading = `${fullTitle}`,
  subheading = `Świadczymy profesjonalne usługi z zakresu prac budowlanych
  i wykończeniowych.`,
  isFullWidth,
}: HeroContentBoxProps) => {
  return (
    <HeroContentBoxWrapper isFullWidth={isFullWidth}>
      <Heading isFullWidth={isFullWidth}>{heading}</Heading>
      <Copy isFullWidth={isFullWidth}>{subheading}</Copy>
    </HeroContentBoxWrapper>
  )
}

export default HeroContentBox
