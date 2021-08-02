import React from 'react'
import { whyUsFeatures } from '../../../theme/businessInfo'
import WhyUsFeature from '../../molecues/WhyUsFeature/WhyUsFeature'
import MainTemplate from '../../templates/MainTemplate'
import Section from '../../templates/Section'

const WhyUs = () => {
  return (
    <MainTemplate
      isFullWidth={true}
      height={52}
      heading="Dlaczego warto nam zaufać"
      subheading="W tym miejscu chcielibyśmy wyszczególnić swoje zalety – doświadczenie, fachowe narzędzia i wiele innych faktów potwierdzających naszą solidność. Ale co Ty będziesz z tego miał?"
      imageSrc="/pages_hero.jpg"
    >
      <Section heading="">
        {whyUsFeatures.map((feature, i) => (
          <WhyUsFeature key={feature.heading} feature={feature} index={i} />
        ))}
      </Section>
    </MainTemplate>
  )
}

export default WhyUs
