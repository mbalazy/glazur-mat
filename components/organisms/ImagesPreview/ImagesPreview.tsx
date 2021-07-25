import React from 'react'
import ReactModal from 'react-modal'
import Image from 'next/image'
import { ImagesGalleryProps } from '../ImagesGallery/ImagesGallery'
import {
  ImagesPreviewWrapper,
  MainImage,
  RestImages,
  SmallImageWrapper,
  CloseButton,
} from './ImagesPreview.style'

type ImagesPreviewProps = {
  allImages?: ImagesGalleryProps['images']
  mainImageIndex: number
  setMainImageIndex: (idx: number) => void
  handleClosePreview: () => void
  isPreviewOpen: boolean
}

const ImagesPreview = ({
  allImages,
  handleClosePreview,
  isPreviewOpen,
  mainImageIndex,
  setMainImageIndex,
}: ImagesPreviewProps) => {
  if (!allImages) return <p>Brak zdjęć</p>

  const setSrcByIndex = () => allImages.find((_, i) => mainImageIndex === i)?.src || ''

  const nextImage = () => {
    if (mainImageIndex < allImages.length - 1) {
      setMainImageIndex(mainImageIndex + 1)
    }
  }
  const prevImage = () => {
    if (mainImageIndex > 0) {
      setMainImageIndex(mainImageIndex - 1)
    }
  }

  return (
    <ReactModal
      contentLabel="podgląd zdjeć z tej realizacji"
      isOpen={isPreviewOpen}
      onRequestClose={() => handleClosePreview()}
      closeTimeoutMS={200}
      appElement={document.getElementById('__next') || {}}
    >
      <ImagesPreviewWrapper>
        <MainImage>
          <Image src={setSrcByIndex()} layout="fill" objectFit="contain" />
        </MainImage>
        <RestImages>
          {allImages?.map(({ src, id }, idx) => (
            <SmallImageWrapper
              key={id}
              isActive={idx === mainImageIndex}
              onClick={() => setMainImageIndex(idx)}
            >
              <Image src={src as string} layout="fill" objectFit="contain" />
            </SmallImageWrapper>
          ))}
        </RestImages>
        <button onClick={nextImage}>next</button>
        <button onClick={prevImage}>prev</button>
        <CloseButton onClick={() => handleClosePreview()} />
      </ImagesPreviewWrapper>
    </ReactModal>
  )
}

export default ImagesPreview
