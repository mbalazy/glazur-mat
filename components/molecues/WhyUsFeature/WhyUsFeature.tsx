import { whyUsFeatures } from '../../../theme/businessInfo'

type WhyUsFeatureProps = {
  feature: typeof whyUsFeatures[number]
  index: number
}

const WhyUsFeature = ({ feature }: WhyUsFeatureProps) => {
  const { copy, heading, imageSrc } = feature

  return (
    <div>
      <p>{heading}</p>
    </div>
  )
}
export default WhyUsFeature
