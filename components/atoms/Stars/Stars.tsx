import starIcon from '../../../public/star.svg'
import style from './Stars.module.scss'

type StarsProps = {
  rating: number
}

const Stars = ({ rating = 5 }: StarsProps) => {
  const starsArr = Array.from(Array(rating).keys())
  return (
    <div className={style.starsWrapper}>
      {starsArr.map((star) => (
        <img key={star} src={starIcon} alt="" />
      ))}
    </div>
  )
}

export default Stars
