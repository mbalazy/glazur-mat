import React from 'react'
import Button from '../../atoms/Button/Button'
import OfferIcons from '../../molecues/OfferIcons/OfferIcons'
import Section from '../../templates/Section'

const SimplyOffer = () => {
  return (
    <Section heading="Sprawdź czym się zajmujemy">
      <OfferIcons />
      <Button>Zobacz całą ofertę</Button>
    </Section>
  )
}

export default SimplyOffer
