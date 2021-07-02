import React from 'react'
import { testimonials } from '../../../theme/businessInfo'
import Testimonial from '../../molecues/Testimonial/Testimonial'
import Section from '../../templates/Section'
import { TestimonialsWrapper } from './Testimonials.style'

const Testimonials = () => {
  return (
    <Section
      isGray
      heading="Nasi zadowoleni klienci"
      subheading="W taki sposób opisali nasze działania w ich domach."
    >
      <TestimonialsWrapper>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </TestimonialsWrapper>
    </Section>
  )
}

export default Testimonials
