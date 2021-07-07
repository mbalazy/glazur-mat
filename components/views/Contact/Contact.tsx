import MainTemplate from '../../templates/MainTemplate'
import Section from '../../templates/Section'

const Contact = () => {
  return (
    <MainTemplate
      isFullWidth={true}
      height={52}
      heading="Skontaktuj się z nami"
      subheading=""
      imageSrc="/hero4.jpg"
    >
      <Section>
        <p>kontakt</p>
      </Section>
    </MainTemplate>
  )
}

export default Contact
