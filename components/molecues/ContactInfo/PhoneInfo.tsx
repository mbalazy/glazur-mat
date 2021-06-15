import ContactInfo from './ContactInfo'
import phoneIcon from '../../../public/phone-call.svg'
import businessInfo from '../../../theme/businessInfo'

const PhoneInfo = () => {
  const [firstPhone] = businessInfo.telephones
  return <ContactInfo label="Zadzwoń do nas:" content={firstPhone} icon={phoneIcon} />
}

export default PhoneInfo
