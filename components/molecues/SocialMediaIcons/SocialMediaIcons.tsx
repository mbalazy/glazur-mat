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
        <li key={social.name}>
          <SocialMediaIcon {...social} />
        </li>
      ))}
    </SocialMediaIconsWrapper>
  )
}

export default SocialMediaIcons
