import ContactInfo from './ContactInfo'
import mailIcon from '../../../public/email.svg'
import businessInfo from '../../../theme/businessInfo'
import { MailInfoStyled } from './ContactInfo.style'

const MailInfo = () => {
  const [firstEmail] = businessInfo.emails
  return (
    <MailInfoStyled>
      <ContactInfo label="Napisz do nas:" content={firstEmail} icon={mailIcon} />
    </MailInfoStyled>
  )
}

export default MailInfo
