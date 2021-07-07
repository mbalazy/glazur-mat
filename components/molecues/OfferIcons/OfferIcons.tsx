import { offerContet } from '../../../theme/businessInfo'
import OfferIcon from '../../atoms/OfferIcon/OfferIcon'
import { GridWrapper } from '../../templates/GridWrapper.style'

const OfferIcons = () => {
  return (
    <GridWrapper>
      {offerContet.map((offer) => (
        <OfferIcon key={offer.name} {...offer} />
      ))}
    </GridWrapper>
  )
}

export default OfferIcons
