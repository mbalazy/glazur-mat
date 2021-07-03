import React from 'react'
import { realizations } from '../../../theme/businessInfo'
import BaseLink from '../../atoms/Link/Link'
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
      <BaseLink href="/realizacje">Zobacz wszystkie</BaseLink>
    </Section>
  )
}

export default SimplyRealizations
