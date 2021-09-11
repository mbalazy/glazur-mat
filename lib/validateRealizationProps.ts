import { IRealizations } from '../generated/graphql'
import businessInfo from '../theme/businessInfo'
import validateRealizationImage from './validateRealizationImage'

export const validateRealizationProps = ({ images, name, description }: IRealizations) => {
  const firstImageSrc = validateRealizationImage(images)
  const { fullTitle } = businessInfo

  return {
    firstImageSrc,
    name: name || `Realizacja ${fullTitle}`,
    description: description || 'Poniżej przedstawiamy zdjęcia z tej realizacji.',
    images: images?.map((image) => ({
      src: image?.asset?.url,
      id: image?.asset?.assetId,
    })),
  }
}
