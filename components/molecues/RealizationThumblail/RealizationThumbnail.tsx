type RealizationThumbnailProps = {
  name: string
  image: string
}

const RealizationThumbnail = ({ name, image }: RealizationThumbnailProps) => {
  return (
    <div>
      <p>img</p>
      <p>line</p>
      <p>{name}</p>
    </div>
  )
}

export default RealizationThumbnail
