import React from 'react'
import { testimonials } from '../../../theme/businessInfo'
import Stars from '../../atoms/Stars/Stars'
import { TestimonialContent, TestimonialName, TestimonialWrapper } from './Testimonial.style'
import { TestimonialWrapperProps } from './Testimonial.style'

type TestimonialProps = typeof testimonials[number] & TestimonialWrapperProps

const Testimonial = ({ name, rating, testimonial, position }: TestimonialProps) => {
  return (
    <TestimonialWrapper position={position}>
      <Stars rating={rating} />
      <TestimonialContent>{testimonial}</TestimonialContent>
      <TestimonialName>{name}</TestimonialName>
    </TestimonialWrapper>
  )
}

export default Testimonial
