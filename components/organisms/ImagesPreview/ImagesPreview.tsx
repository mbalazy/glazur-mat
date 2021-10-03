import React from 'react'
import { ImagesGalleryProps } from '../ImagesGallery/ImagesGallery'
import ImagesPreviewModal from '../ImagesPreviewModal/ImagesPreviewModal'
import ImageGallery from 'react-image-gallery'

type ImagesPreviewProps = {
  allImages?: ImagesGalleryProps['images']
  handleClosePreview: () => void
  isPreviewOpen: boolean
}

const ImagesPreview = ({ allImages, isPreviewOpen, handleClosePreview }: ImagesPreviewProps) => {
  if (!allImages) return <p>Brak zdjęć</p>

  const images = allImages.map((image) => ({
    original: image.src as string,
    thumbnail: image.src as string,
  }))

  return (
    <ImagesPreviewModal handleClosePreview={handleClosePreview} isPreviewOpen={isPreviewOpen}>
      <ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />
    </ImagesPreviewModal>
  )
}

export default ImagesPreview
