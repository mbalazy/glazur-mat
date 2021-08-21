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
  const getMainImageSrcFromAllImages = () =>
    allImages?.find((_, i) => mainImageIndex === i)?.src || ''

  const showNextImage = () => {
    if (!allImages) return
    if (mainImageIndex < allImages.length - 1) {
      setMainImageIndex(mainImageIndex + 1)
    } else {
      // cycle through
      setMainImageIndex(0)
    }
  }

  const showPrevImage = () => {
    if (!allImages) return
    if (mainImageIndex > 0) {
      setMainImageIndex(mainImageIndex - 1)
    } else {
      // cycle through
      setMainImageIndex(allImages.length - 1)
    }
  }

  const handleArrowNavigation = () => {
    useKeyPress('ArrowRight', showNextImage)
    useKeyPress('ArrowLeft', showPrevImage)
    useKeyPress('l', showNextImage)
    useKeyPress('h', showPrevImage)
  }

  return {
    getMainImageSrcFromAllImages,
    showNextImage,
    showPrevImage,
    handleArrowNavigation,
  }
}
