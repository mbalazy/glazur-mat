import starIcon from '../../../public/star.svg'
import { StarsWrapper } from './Stars.style'

type StarsProps = {
  rating: number
}

const Stars = ({ rating = 5 }: StarsProps) => {
  const starsArr = Array.from(Array(rating).keys())
  return (
    <StarsWrapper>
      {starsArr.map((star) => (
        <img key={star} src={starIcon} alt="" />
      ))}
    </StarsWrapper>
  )
}

export default Stars
