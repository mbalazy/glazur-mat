import { H2 } from '../../theme/Typography'
import { ChildrenWrapper, SectionWrapper, Subheading } from './Section.style'

export type SectionProps = {
  heading?: string
  subheading?: string
  isGray?: boolean
  children: JSX.Element | JSX.Element[]
}

const Section = ({ heading, subheading, children, isGray }: SectionProps) => {
  return (
    <SectionWrapper isGray={isGray}>
      {heading && <H2>{heading}</H2>}
      {subheading && <Subheading>{subheading}</Subheading>}
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </SectionWrapper>
  )
}

export default Section
