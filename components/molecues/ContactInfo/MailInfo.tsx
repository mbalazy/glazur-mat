import ContactInfo from './ContactInfo'
import mailIcon from '../../../public/email.svg'
import businessInfo from '../../../theme/businessInfo'

const MailInfo = () => {
  const [firstEmail] = businessInfo.emails
  return (
    <a href={`mailto:${firstEmail}`}>
      <ContactInfo label="Napisz do nas:" content={firstEmail} icon={mailIcon} />
    </a>
  )
}

export default MailInfo
