import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../../redux/single-product/actionCreator'

import { MessageBox, BackLink, CartBox } from '../../components'

import './index.scss'

const ProductScreen = props => {
  const dispatch = useDispatch()
  const productId = props.match.params.id
  const { products } = useSelector(state => state.productDetails)
  const history = useHistory()
  const { t } = useTranslation('translation')

  useEffect(() => {
    dispatch(detailsProduct(productId))
  }, [dispatch, productId])

  const ProductContent = () => {
    const { image, brand, title, price, description, countInStock } = products

    return (
      <div>
        <BackLink path={() => history.goBack()} />
        <div className="product-screen">
          <h1 className="product-title">{t(title)}</h1>
          <p className="product-brand">{brand}</p>
          <div className="page-content">
            <div className="col-1">
              <div className="image-container">
                <img className="large-img" src={image} alt={title} />
              </div>
              <div className="product-description">
                <h2>{t('productInfo.description')}:</h2>
                <p>{t(description)}</p>
              </div>
            </div>
            <div className="col-2">
              <CartBox
                price={price}
                countInStock={countInStock}
                productId={productId}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return products ? (
    <ProductContent />
  ) : (
    <MessageBox label={t('productInfo.notFound')} />
  )
}

export default ProductScreen
