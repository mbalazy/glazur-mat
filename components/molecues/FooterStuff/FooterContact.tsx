import ContactContent from '../../atoms/ContactContent/ContactContent'
import FooterSection from '../../templates/FooterSection'

const FooterContact = () => {
  return (
    <FooterSection subheading="Porozmawiaj z nami!" heading="kontakt do nas" icon="/identi.svg">
      <ContactContent />
    </FooterSection>
  )
}

export default FooterContact
