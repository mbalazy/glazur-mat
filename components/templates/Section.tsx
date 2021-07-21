import { ChildrenWrapper, Heading, SectionWrapper, Subheading } from './Section.style'

export type SectionProps = {
  heading?: string
  subheading?: string
  isGray?: boolean
  isFullWidth?: boolean
  children: JSX.Element | JSX.Element[]
}

const Section = ({ heading, subheading, children, isGray, isFullWidth }: SectionProps) => {
  return (
    <SectionWrapper isGray={isGray}>
      {heading && <Heading>{heading}</Heading>}
      {subheading && <Subheading>{subheading}</Subheading>}
      <ChildrenWrapper isFullWidth={isFullWidth} isEmptyHeading={!heading && !subheading}>
        {children}
      </ChildrenWrapper>
    </SectionWrapper>
  )
}

export default Section
