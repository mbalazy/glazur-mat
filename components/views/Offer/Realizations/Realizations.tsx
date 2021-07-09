import React from 'react'
import { RealizationsProps } from '../../../../pages/realizacje'
import { realizationsContent, realizationsSubheading } from '../../../../theme/businessInfo'
import RealizationThumbnail from '../../../molecues/RealizationThumblail/RealizationThumbnail'
import { GridWrapper } from '../../../templates/GridWrapper.style'
import MainTemplate from '../../../templates/MainTemplate'
import Section from '../../../templates/Section'

const Realizations = ({ allRealizations }: RealizationsProps) => {
  console.log(allRealizations)
  return (
    <MainTemplate
      isFullWidth={true}
      height={52}
      heading="Sprawdź nasz realizacje"
      subheading={realizationsSubheading}
      imageSrc="/hero4.jpg"
    >
      <Section heading="Przykładowe ostatnie realizacje wykonane przez nas:">
        <GridWrapper>
          {realizationsContent.map((realization) => (
            <RealizationThumbnail key={realization.name} {...realization} />
          ))}
        </GridWrapper>
      </Section>
    </MainTemplate>
  )
}

export default Realizations
