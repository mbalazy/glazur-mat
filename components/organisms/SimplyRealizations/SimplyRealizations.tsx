import { realizationsContent } from '../../../theme/businessInfo'
import BaseLink from '../../atoms/Link/Link'
import RealizationThumbnail from '../../molecues/RealizationThumblail/RealizationThumbnail'
import { GridWrapper } from '../../templates/GridWrapper.style'
import Section from '../../templates/Section'

const SimplyRealizations = () => {
  return (
    <Section
      heading="Nasze Realizacje"
      subheading=" Mamy na swoim koncie już wiele udanych realizacji i jeszcze więcej szczęśliwych Klientów."
    >
      <GridWrapper>
        {realizationsContent.slice(0, 3).map((realization) => (
          <RealizationThumbnail key={realization.name} {...realization} />
        ))}
      </GridWrapper>
      <BaseLink href="/realizacje">Zobacz wszystkie</BaseLink>
    </Section>
  )
}

export default SimplyRealizations
