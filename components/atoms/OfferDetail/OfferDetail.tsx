import style from './OfferDetail.module.scss'

type OfferDetailProps = {
  detail: string
}

const OfferDetail = ({ detail }: OfferDetailProps) => {
  return <p className={style.offerDetailStyles}>{detail}</p>
}

export default OfferDetail
