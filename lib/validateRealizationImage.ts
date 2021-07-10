import { IImage, Maybe } from '../generated/graphql'

export const validateRealizationImage = (images?: Maybe<Maybe<IImage>[]>) => {
  const backupImageSrc = '/lazienka1.jpg'
  if (!images) {
    images = [{ asset: { url: backupImageSrc } }]
  }
  return images[0]?.asset?.url || backupImageSrc
}

export default validateRealizationImage
