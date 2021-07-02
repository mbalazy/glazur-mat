import React from 'react'
import { testimonials } from '../../../theme/businessInfo'
import { TestimonialContent, TestimonialName, TestimonialWrapper } from './Testimonial.style'

type TestimonialProps = typeof testimonials[number]

const Testimonial = ({ name, rating, testimonial }: TestimonialProps) => {
  return (
    <TestimonialWrapper>
      <TestimonialContent>{testimonial}</TestimonialContent>
      <TestimonialName>{name}</TestimonialName>
    </TestimonialWrapper>
  )
}

export default Testimonial
