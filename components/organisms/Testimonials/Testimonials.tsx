import React from 'react'
import { testimonials } from '../../../theme/businessInfo'
import BaseLink from '../../atoms/Link/Link'
import Testimonial from '../../molecues/Testimonial/Testimonial'
import Section from '../../templates/Section'
import { TestimonialsWrapper } from './Testimonials.style'

const Testimonials = () => {
  return (
    <Section
      isGray={true}
      heading="Nasi zadowoleni klienci"
      subheading="W taki sposób opisali nasze działania w ich domach."
    >
      <TestimonialsWrapper>
        {testimonials.map((testimonial, i) => (
          <Testimonial position={i} key={testimonial.name} {...testimonial} />
        ))}
      </TestimonialsWrapper>
      <BaseLink href="/dlaczego-my">Dlaczego my</BaseLink>
    </Section>
  )
}

export default Testimonials
