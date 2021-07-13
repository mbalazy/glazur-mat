import React from 'react'
import { IRealizations } from '../../../generated/graphql'
import { validateRealizationProps } from '../../../lib/validateRealizationProps'
import ImagesGallery from '../../organisms/ImagesGallery/ImagesGallery'
import MainTemplate from '../../templates/MainTemplate'
import Section from '../../templates/Section'

const Realization = (props: IRealizations) => {
  const { name, description, firstImageSrc, images } = validateRealizationProps(props)
  return (
    <MainTemplate
      isFullWidth={true}
      height={52}
      heading={name}
      subheading={description}
      imageSrc={firstImageSrc}
    >
      <Section heading="Galeria Zdjęć">
        <ImagesGallery images={images} />
      </Section>
    </MainTemplate>
  )
}

export default Realization