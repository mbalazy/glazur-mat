import ContactInfo from './ContactInfo'
import mailIcon from '../../../public/email.svg'
import businessInfo from '../../../theme/businessInfo'

const MailInfo = () => {
  const [firstEmail] = businessInfo.emails
  return <ContactInfo label="Napisz do nas:" content={firstEmail} icon={mailIcon} />
}

export default MailInfo
