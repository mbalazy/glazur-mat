import React from 'react'
import { whyUsFeatures } from '../../../theme/businessInfo'
import ImageCoverFit from '../../atoms/Image/ImageCoverFit'
import { FeatureImageWrapper, FeatureText, FeatureWrapper } from './WhyUsFeature.style'

type WhyUsFeatureProps = {
  feature: typeof whyUsFeatures[number]
  index: number
}

const WhyUsFeature = ({ feature: { copy, heading, imageSrc }, index }: WhyUsFeatureProps) => {
  const trueIfOdd = (i: number) => (i % 2 === 0 ? false : true)

  return (
    <FeatureWrapper>
      <FeatureText isTextOnRight={trueIfOdd(index)}>
        <div>
          <h3>{heading}</h3>
          <p>{copy}</p>
        </div>
      </FeatureText>
      <FeatureImageWrapper>
        <ImageCoverFit src={imageSrc} />
      </FeatureImageWrapper>
    </FeatureWrapper>
  )
}
export default WhyUsFeature
