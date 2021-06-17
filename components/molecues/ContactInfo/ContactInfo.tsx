import { ContactInfoIcon, ContactInfoWrapper, ContactInfoLabel } from './ContactInfo.style'

type ContactInfoProps = {
  icon: string
  label: string
  content: string
}

const ContactInfo = ({ icon, label, content }: ContactInfoProps) => {
  return (
    <ContactInfoWrapper>
      <ContactInfoIcon src={icon} alt="ikona kontaktu" />
      <div>
        <ContactInfoLabel>{label}</ContactInfoLabel>
        <p>{content}</p>
      </div>
    </ContactInfoWrapper>
  )
}

export default ContactInfo
