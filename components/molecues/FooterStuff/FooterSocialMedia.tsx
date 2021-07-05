import FooterSection from '../../templates/FooterSection'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'

const FooterSocialMedia = () => {
  return (
    <FooterSection subheading="Śledź nas!" heading="nasze social media" icon="/social.svg">
      <SocialMediaIcons isBrighter={true} />
    </FooterSection>
  )
}

export default FooterSocialMedia
