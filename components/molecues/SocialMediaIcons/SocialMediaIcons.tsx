import { socials } from '../../../theme/businessInfo'
import SocialMediaIcon from '../../atoms/SocialMediaIcon/SocialMediaIcon'
import { SocialMediaIconsWrapper } from './SocialMediaIcons.style'

export type SocialMediaIconsProp = {
  isBrighter?: boolean
}

const SocialMediaIcons = (props: SocialMediaIconsProp) => {
  return (
    <SocialMediaIconsWrapper {...props}>
      {socials.map((social) => (
        <SocialMediaIcon key={social.name} {...social} />
      ))}
    </SocialMediaIconsWrapper>
  )
}

export default SocialMediaIcons
