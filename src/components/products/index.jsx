import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { CommonButton, LoadingBox, Rating } from '../index'

import './index.scss'

const ListProducts = () => {
  const { t } = useTranslation('translation')

  const { products } = useSelector(state => state.productList)

  const history = useHistory()

  const toProductScreen = id => history.push(`/products/${id}`)

  const singleProduct = products.map(
    ({ id, image, title, price, rating, numReviews }) => (
      <li key={id}>
        <div className="product-card">
          <Link to={`/products/${id}`}>
            <img src={image} alt={title} />
            <p className="product-card__title">{t(title)}</p>
          </Link>

          <Rating rating={rating} numReviews={numReviews} />
          <div className="product-card__price">
            <div>${price}</div>
            <CommonButton
              label={t('button.follow')}
              onClick={() => toProductScreen(id)}
            />
          </div>
        </div>
      </li>
    )
  )

  return (
    <section className="productList">
      <ul className="products">{singleProduct}</ul>
    </section>
  )
}

export default ListProducts
