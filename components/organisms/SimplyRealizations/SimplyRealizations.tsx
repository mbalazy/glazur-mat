import { RealizationsProps } from '../../../pages/realizacje'
import BaseLink from '../../atoms/Link/Link'
import RealizationThumbnail from '../../molecues/RealizationThumblail/RealizationThumbnail'
import { GridWrapper } from '../../templates/GridWrapper.style'
import Section from '../../templates/Section'

const SimplyRealizations = ({ allRealizations }: RealizationsProps) => {
  const firstThreeRealizations = allRealizations.slice(0, 3)
  return (
    <Section
      heading="Nasze Realizacje"
      subheading=" Mamy na swoim koncie już wiele udanych realizacji i jeszcze więcej szczęśliwych Klientów."
    >
      <GridWrapper>
        {firstThreeRealizations.map((realization) => (
          <RealizationThumbnail key={realization._id} {...realization} />
        ))}
      </GridWrapper>
      <BaseLink href="/realizacje">Zobacz wszystkie</BaseLink>
    </Section>
  )
}

export default SimplyRealizations
