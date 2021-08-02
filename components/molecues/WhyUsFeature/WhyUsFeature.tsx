import React from 'react'
import { whyUsFeatures } from '../../../theme/businessInfo'
import ImageCoverFit from '../../atoms/Image/ImageCoverFit'
import { FeatureImageWrapper, FeatureText, FeatureWrapper } from './WhyUsFeature.style'

type WhyUsFeatureProps = {
  feature: typeof whyUsFeatures[number]
  index: number
}

const WhyUsFeature = ({ feature }: WhyUsFeatureProps) => {
  const { copy, heading, imageSrc } = feature

  return (
    <FeatureWrapper>
      <FeatureText>
        <p>{heading}</p>
        <p>{copy}</p>
      </FeatureText>
      <FeatureImageWrapper>
        <ImageCoverFit src={imageSrc} />
      </FeatureImageWrapper>
    </FeatureWrapper>
  )
}
export default WhyUsFeature
