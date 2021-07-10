type SocialMediaIconProps = {
  name: string
  icon: string
  link: string
}

const SocialMediaIcon = ({ name, link, icon }: SocialMediaIconProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img width="32px" height="32px" src={icon} alt={name} />
    </a>
  )
}

export default SocialMediaIcon
