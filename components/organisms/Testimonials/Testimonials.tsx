import React from 'react'
import { testimonials } from '../../../theme/businessInfo'
import BaseLink from '../../atoms/Link/Link'
import Testimonial from '../../molecues/Testimonial/Testimonial'
import { TestimonialWrapperStyledProps } from '../../molecues/Testimonial/Testimonial.style'
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
        {
          // only first 3 testimonials displayed on page
        }
        {testimonials.slice(0, 3).map((testimonial, i) => (
          <Testimonial
            position={i as TestimonialWrapperStyledProps['position']}
            key={testimonial.name}
            {...testimonial}
          />
        ))}
      </TestimonialsWrapper>
      <BaseLink href="/dlaczego-my">Dlaczego my</BaseLink>
    </Section>
  )
}

export default Testimonials
