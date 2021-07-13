import { contactSubheading } from '../../../theme/businessInfo'
import ContactContent from '../../atoms/ContactContent/ContactContent'
import MainTemplate from '../../templates/MainTemplate'
import Section from '../../templates/Section'

const Contact = () => {
  return (
    <MainTemplate
      isFullWidth={true}
      height={52}
      heading="Skontaktuj się z nami"
      subheading={contactSubheading}
      imageSrc="/hero4.jpg"
    >
      <Section>
        <ContactContent />
      </Section>
    </MainTemplate>
  )
}

export default Contact
