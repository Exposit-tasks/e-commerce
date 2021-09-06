import { useTranslation } from 'react-i18next'

import './index.scss'

const Rating = ({ rating, numReviews }) => {
  const { t } = useTranslation('translation')

  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? 'fa fa-star'
              : rating >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? 'fa fa-star'
              : rating >= 1.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? 'fa fa-star'
              : rating >= 2.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? 'fa fa-star'
              : rating >= 3.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? 'fa fa-star'
              : rating >= 4.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }
        />
      </span>
      <span className="num-reviews">
        {numReviews}: {t('reviews')}
      </span>
    </div>
  )
}

export default Rating
