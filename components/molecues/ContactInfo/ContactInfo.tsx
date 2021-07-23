import style from './ContactInfo.module.scss'

type ContactInfoProps = {
  icon: string
  label: string
  content: string
}

const ContactInfo = ({ icon, label, content }: ContactInfoProps) => {
  return (
    <div className={style.contactInfoWrapper}>
      <img className={style.contactInfoIcon} src={icon} alt="ikona kontaktu" />
      <div>
        <span className={style.contactInfoLabel}>{label}</span>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default ContactInfo
