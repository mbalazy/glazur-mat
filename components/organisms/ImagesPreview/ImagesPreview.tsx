import React from 'react'
import { ImagesGalleryProps } from '../ImagesGallery/ImagesGallery'
import {
  ImagesPreviewWrapper,
  MainImage,
  RestImages,
  SmallImageWrapper,
  CloseButton,
  NextButton,
  PrevButton,
} from './ImagesPreview.style'
import { useImagePreviewNav } from '../../../hooks/useImagePreviewNav'
import ImagesPreviewModal from '../ImagesPreviewModal/ImagesPreviewModal'
import ImageContainFit from '../../atoms/Image/ImageContainFit'

type ImagesPreviewProps = {
  allImages?: ImagesGalleryProps['images']
  mainImageIndex: number
  setMainImageIndex: (idx: number) => void
  handleClosePreview: () => void
  isPreviewOpen: boolean
}

const ImagesPreview = ({
  allImages,
  isPreviewOpen,
  mainImageIndex,
  setMainImageIndex,
  handleClosePreview,
}: ImagesPreviewProps) => {
  if (!allImages) return <p>Brak zdjęć</p>

  const { getMainImageSrcFromAllImages, handleArrowNavigation, showNextImage, showPrevImage } =
    useImagePreviewNav({ allImages, mainImageIndex, setMainImageIndex })

  const mainImageSrc = getMainImageSrcFromAllImages()
  handleArrowNavigation()

  return (
    <ImagesPreviewModal handleClosePreview={handleClosePreview} isPreviewOpen={isPreviewOpen}>
      <ImagesPreviewWrapper>
        <MainImage>
          <ImageContainFit alt="główne zdjęcie realizacji" src={mainImageSrc} />
        </MainImage>
        <RestImages>
          {allImages.map(
            ({ src, id }, idx) =>
              src && (
                <SmallImageWrapper
                  key={id}
                  isActive={idx === mainImageIndex}
                  onClick={() => setMainImageIndex(idx)}
                >
                  <ImageContainFit alt="realizacja" src={src} />
                </SmallImageWrapper>
              )
          )}
        </RestImages>
        <NextButton onClick={showNextImage} aria-label="następne zdjęcie" />
        <PrevButton onClick={showPrevImage} aria-label="poprzednie zdjęcie" />
        <CloseButton onClick={handleClosePreview} aria-label="zamknij podgląd zdjęć" />
      </ImagesPreviewWrapper>
    </ImagesPreviewModal>
  )
}

export default ImagesPreview
