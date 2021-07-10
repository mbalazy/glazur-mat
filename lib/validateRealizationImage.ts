import { IImage, Maybe } from '../generated/graphql'

export const validateRealizationImage = (images?: Maybe<Maybe<IImage>[]>) => {
  if (!images) {
    images = [{ asset: { url: '/lazienka1.jpg' } }]
  }
  return images[0]?.asset?.url || '/lazienka1.jpg'
}

export default validateRealizationImage
