import { IRealizations } from '../generated/graphql'
import validateRealizationImage from './validateRealizationImage'

export const validateRealizationProps = ({ images, name, description }: IRealizations) => {
  const firstImageSrc = validateRealizationImage(images)
  return {
    firstImageSrc,
    name: name || 'Nazwa realizacji',
    description: description || 'Opis realizacji',
    images: images?.map((image) => ({
      src: image?.asset?.url,
      id: image?.asset?.assetId,
    })),
  }
}
