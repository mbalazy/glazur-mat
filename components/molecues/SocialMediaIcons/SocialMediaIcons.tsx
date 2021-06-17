import { socials } from '../../../theme/businessInfo'
import SocialMediaIcon from '../../atoms/SocialMediaIcon/SocialMediaIcon'
import { SocialMediaIconsWrapper } from './SocialMediaIcons.style'

const SocialMediaIcons = () => {
  return (
    <SocialMediaIconsWrapper>
      {socials.map((social) => (
        <SocialMediaIcon key={social.name} {...social} />
      ))}
    </SocialMediaIconsWrapper>
  )
}

export default SocialMediaIcons
