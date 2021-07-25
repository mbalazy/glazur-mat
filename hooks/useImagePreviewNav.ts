import { ImagesGalleryProps } from '../components/organisms/ImagesGallery/ImagesGallery'
import { useKeyPress } from './useKeyPress'

export function useImagePreviewNav(
  mainImageIndex: number,
  allImages: ImagesGalleryProps['images'],
  setMainImageIndex: (idx: number) => void
) {
  const setSrcByIndex = () => allImages?.find((_, i) => mainImageIndex === i)?.src || ''

  const nextImage = () => {
    if (mainImageIndex < allImages!.length - 1) {
      setMainImageIndex(mainImageIndex + 1)
    }
  }
  const prevImage = () => {
    if (mainImageIndex > 0) {
      setMainImageIndex(mainImageIndex - 1)
    }
  }

  const handleArrowPress = () => {
    useKeyPress('ArrowRight', nextImage)
    useKeyPress('ArrowLeft', prevImage)
    useKeyPress('l', nextImage)
    useKeyPress('h', prevImage)
  }

  handleArrowPress()

  return { setSrcByIndex, nextImage, prevImage, handleArrowPress }
}
