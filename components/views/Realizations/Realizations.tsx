import React from 'react'
import { RealizationsProps } from '../../../pages/realizacje'
import { realizationHeading, realizationsSubheading } from '../../../theme/businessInfo'
import RealizationThumbnail from '../../molecues/RealizationThumblail/RealizationThumbnail'
import { GridWrapper } from '../../templates/GridWrapper.style'
import MainTemplate from '../../templates/MainTemplate'
import Section from '../../templates/Section'

const Realizations = ({ allRealizations }: RealizationsProps) => {
  return (
    <MainTemplate
      isFullWidth={true}
      height={52}
      heading={realizationHeading}
      subheading={realizationsSubheading}
      imageSrc="/pages_hero.jpg"
    >
      <Section heading="Nasze ostatnio wykonane realizacje:">
        <GridWrapper>
          {allRealizations.map((realization) => (
            <RealizationThumbnail key={realization._id} {...realization} />
          ))}
        </GridWrapper>
      </Section>
    </MainTemplate>
  )
}

export default Realizations
