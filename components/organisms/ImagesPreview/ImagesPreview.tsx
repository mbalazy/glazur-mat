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
  NextButton,
  PrevButton,
} from './ImagesPreview.style'

type ImagesPreviewProps = {
  allImages?: ImagesGalleryProps['images']
  mainImageIndex: number
  setMainImageIndex: (idx: number) => void
  handleClosePreview: () => void
  isPreviewOpen: boolean
}
import { useEffect, useState } from 'react'

export function useKeyPress(targetKey: string, onPressDown = () => {}, onPressUp = () => {}) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)

  useEffect(() => {
    // If pressed key is our target key then set to true
    function downHandler({ key }: { key: string }) {
      if (key === targetKey) {
        setKeyPressed(true)
        onPressDown()
      }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }: { key: string }) => {
      if (key === targetKey) {
        setKeyPressed(false)
        onPressUp()
      }
    }

    // Add event listeners
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  })

  return keyPressed
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

  useKeyPress('ArrowRight', nextImage)
  useKeyPress('ArrowLeft', prevImage)
  useKeyPress('l', nextImage)
  useKeyPress('h', prevImage)

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
        <NextButton onClick={nextImage}>next</NextButton>
        <PrevButton onClick={prevImage}>prev</PrevButton>
        <CloseButton onClick={() => handleClosePreview()} />
      </ImagesPreviewWrapper>
    </ReactModal>
  )
}

export default ImagesPreview
