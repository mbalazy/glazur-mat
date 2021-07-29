import { NextSeo } from 'next-seo'
import React from 'react'
import WhyUs from '../../components/views/WhyUs/WhyUs'
import businessInfo from '../../theme/businessInfo'

const WhyUsPage = () => {
  const { fullTitle } = businessInfo
  return (
    <>
      <NextSeo
        title={`Dlaczego My? | ${fullTitle}`}
        description="W tym miejscu chcielibyśmy wyszczególnić swoje zalety."
      />
      <WhyUs />
    </>
  )
}

export default WhyUsPage
