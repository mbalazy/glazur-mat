import { ContactIcon, ContactInfoWrapper, Label } from './ContactInfo.style'

type ContactInfoProps = {
  icon: string
  label: string
  content: string
}

const ContactInfo = ({ icon, label, content }: ContactInfoProps) => {
  return (
    <ContactInfoWrapper>
      <ContactIcon src={icon} alt="ikona kontaktu" />
      <div>
        <Label>{label}</Label>
        <p>{content}</p>
      </div>
    </ContactInfoWrapper>
  )
}

export default ContactInfo
