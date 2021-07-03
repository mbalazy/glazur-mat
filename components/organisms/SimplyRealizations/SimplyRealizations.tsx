import React from 'react'
import { realizations } from '../../../theme/businessInfo'
import RealizationThumbnail from '../../molecues/RealizationThumblail/RealizationThumbnail'
import Section from '../../templates/Section'
import { SimplyRealizationsWrapper } from './SimplyRealizations.style'

const SimplyRealizations = () => {
  return (
    <Section
      heading="Nasze Realizacje"
      subheading=" Mamy na swoim koncie już wiele udanych realizacji i jeszcze więcej szczęśliwych Klientów."
    >
      <SimplyRealizationsWrapper>
        {realizations.slice(0, 3).map((realization) => (
          <RealizationThumbnail key={realization.name} {...realization} />
        ))}
      </SimplyRealizationsWrapper>
    </Section>
  )
}

export default SimplyRealizations
