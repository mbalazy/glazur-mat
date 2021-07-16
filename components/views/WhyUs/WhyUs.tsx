import React from 'react'
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
        <p>dlaczego my</p>
      </Section>
    </MainTemplate>
  )
}

export default WhyUs
