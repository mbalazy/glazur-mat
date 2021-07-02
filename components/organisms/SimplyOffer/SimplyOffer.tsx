import React from 'react'
import BaseLink from '../../atoms/Link/Link'
import OfferIcons from '../../molecues/OfferIcons/OfferIcons'
import Section from '../../templates/Section'

const SimplyOffer = () => {
  return (
    <Section heading="Sprawdź czym się zajmujemy">
      <OfferIcons />
      <BaseLink href="/oferta">Zobacz całą ofertę</BaseLink>
    </Section>
  )
}

export default SimplyOffer
