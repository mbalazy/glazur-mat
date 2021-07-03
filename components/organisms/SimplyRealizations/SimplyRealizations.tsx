import React from 'react'
import { realizations } from '../../../theme/businessInfo'
import Section from '../../templates/Section'

const SimplyRealizations = () => {
  return (
    <Section
      heading="Nasze Realizacje"
      subheading=" Mamy na swoim koncie już wiele udanych realizacji i jeszcze więcej szczęśliwych Klientów."
    >
      {realizations.slice(0, 3).map((realization) => (
        <p>{realization.name}</p>
      ))}
    </Section>
  )
}

export default SimplyRealizations
