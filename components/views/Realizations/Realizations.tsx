import React from 'react'
import { RealizationsProps } from '../../../pages/realizacje'
import { realizationsSubheading } from '../../../theme/businessInfo'
import RealizationThumbnail from '../../molecues/RealizationThumblail/RealizationThumbnail'
import { GridWrapper } from '../../templates/GridWrapper.style'
import MainTemplate from '../../templates/MainTemplate'
import Section from '../../templates/Section'

const Realizations = ({ allRealizations }: RealizationsProps) => {
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
          {allRealizations.map((realization) => (
            <RealizationThumbnail key={realization._id} {...realization} />
          ))}
        </GridWrapper>
      </Section>
    </MainTemplate>
  )
}

export default Realizations
