import { ImagesGalleryProps } from '../components/organisms/ImagesGallery/ImagesGallery'
import { useKeyPress } from './useKeyPress'
type useImagePreviewNavProps = {
  mainImageIndex: number
  allImages: ImagesGalleryProps['images']
  setMainImageIndex: (idx: number) => void
}

export function useImagePreviewNav({
  allImages,
  mainImageIndex,
  setMainImageIndex,
}: useImagePreviewNavProps) {
  const setMainImageSrcFromAllImages = () =>
    allImages?.find((_, i) => mainImageIndex === i)?.src || ''

  const showNextImage = () => {
    if (mainImageIndex < allImages!.length - 1) {
      setMainImageIndex(mainImageIndex + 1)
    }
  }
  const showPrevImage = () => {
    if (mainImageIndex > 0) {
      setMainImageIndex(mainImageIndex - 1)
    }
  }

  const handleArrowPress = () => {
    useKeyPress('ArrowRight', showNextImage)
    useKeyPress('ArrowLeft', showPrevImage)
    useKeyPress('l', showNextImage)
    useKeyPress('h', showPrevImage)
  }

  handleArrowPress()

  return {
    mainImgSrc: setMainImageSrcFromAllImages,
    showNextImage,
    showPrevImage,
    handleArrowPress,
  }
}
