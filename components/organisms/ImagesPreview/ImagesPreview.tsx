import React from 'react'
import Image from 'next/image'
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

  const { setMainImageSrcFromAllImages, handleArrowNavigation, showNextImage, showPrevImage } =
    useImagePreviewNav({
      mainImageIndex,
      allImages,
      setMainImageIndex,
    })

  const mainImageSrc = setMainImageSrcFromAllImages()
  handleArrowNavigation()

  return (
    <ImagesPreviewModal handleClosePreview={handleClosePreview} isPreviewOpen={isPreviewOpen}>
      <ImagesPreviewWrapper>
        <MainImage>
          <Image src={mainImageSrc} layout="fill" objectFit="contain" />
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
                  <Image src={src} layout="fill" objectFit="contain" />
                </SmallImageWrapper>
              )
          )}
        </RestImages>
        <NextButton onClick={showNextImage} />
        <PrevButton onClick={showPrevImage} />
        <CloseButton onClick={() => handleClosePreview()} />
      </ImagesPreviewWrapper>
    </ImagesPreviewModal>
  )
}

export default ImagesPreview
