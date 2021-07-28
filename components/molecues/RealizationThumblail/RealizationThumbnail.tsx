import Link from 'next/link'
import { IRealizations } from '../../../generated/graphql'
import validateRealizationImage from '../../../lib/validateRealizationImage'
import ImageCoverFit from '../../atoms/Image/ImageCoverFit'
import {
  DecoratedLine,
  ImageWrapper,
  RealizationName,
  RealizationThumbnailWrapper,
} from './RealizationThumbnail.style'

const RealizationThumbnail = ({ name, images, slug }: IRealizations) => {
  const firstImageSrc = () => validateRealizationImage(images)
  return (
    <Link href={`/realizacje/${slug?.current}`} passHref>
      <RealizationThumbnailWrapper>
        <ImageWrapper>
          <ImageCoverFit src={firstImageSrc()} alt="realizacja" />
        </ImageWrapper>
        <DecoratedLine />
        <RealizationName>{name}</RealizationName>
      </RealizationThumbnailWrapper>
    </Link>
  )
}

export default RealizationThumbnail
