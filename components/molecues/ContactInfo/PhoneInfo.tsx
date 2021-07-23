import ContactInfo from './ContactInfo'
import phoneIcon from '../../../public/phone-call.svg'
import businessInfo from '../../../theme/businessInfo'

const PhoneInfo = () => {
  const [firstPhone] = businessInfo.telephones
  return (
    <a href={`tel:${firstPhone}`}>
      <ContactInfo label="Zadzwoń do nas:" content={firstPhone} icon={phoneIcon} />
    </a>
  )
}

export default PhoneInfo
