import { offerContet } from '../../../theme/businessInfo'
import OfferIcon from '../../atoms/OfferIcon/OfferIcon'
import { OfferIconsWrapper } from './OfferIcons.style'

const OfferIcons = () => {
  return (
    <OfferIconsWrapper>
      {offerContet.map((offer) => (
        <OfferIcon key={offer.name} {...offer} />
      ))}
    </OfferIconsWrapper>
  )
}

export default OfferIcons
