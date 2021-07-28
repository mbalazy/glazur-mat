import ContactInfo from './ContactInfo'
import phoneIcon from '../../../public/phone-call.svg'
import businessInfo from '../../../theme/businessInfo'
import { PhoneInfoWrapper } from './ContactInfo.style'

const PhoneInfo = () => {
  const [firstPhone] = businessInfo.telephones
  return (
    <PhoneInfoWrapper href={`tel:${firstPhone}`}>
      <ContactInfo label="Zadzwoń do nas:" content={firstPhone} icon={phoneIcon} />
    </PhoneInfoWrapper>
  )
}

export default PhoneInfo
