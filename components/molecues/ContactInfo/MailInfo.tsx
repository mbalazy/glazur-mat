import ContactInfo from './ContactInfo'
import mailIcon from '../../../public/email.svg'
import businessInfo from '../../../theme/businessInfo'
import { MailInfoWrapper } from './ContactInfo.style'

const MailInfo = () => {
  const [firstEmail] = businessInfo.emails
  return (
    <MailInfoWrapper>
      <ContactInfo label="Napisz do nas:" content={firstEmail} icon={mailIcon} />
    </MailInfoWrapper>
  )
}

export default MailInfo
