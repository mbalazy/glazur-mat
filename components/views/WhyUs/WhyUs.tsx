import React from 'react'
import { GridWrapper } from '../../templates/GridWrapper.style'
import MainTemplate from '../../templates/MainTemplate'
import Section from '../../templates/Section'

const WhyUs = () => {
  return (
    <MainTemplate
      isFullWidth={true}
      height={52}
      heading="Dlaczego warto nam zaufać"
      subheading="W tym miejscu chcielibyśmy wyszczególnić swoje zalety – doświadczenie, fachowe narzędzia i wiele innych faktów potwierdzających naszą solidność. Ale co Ty będziesz z tego miał?"
      imageSrc="/hero4.jpg"
    >
      <Section heading="">
        <GridWrapper>
          <p>dlaczego my</p>
        </GridWrapper>
      </Section>
    </MainTemplate>
  )
}

export default WhyUs
