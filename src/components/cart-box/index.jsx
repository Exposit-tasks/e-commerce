import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { getDeliveryDate } from '../../utils'

import { CommonButton } from '../'

import './index.scss'

const CartBox = ({ price, countInStock, productId }) => {
  const { t } = useTranslation('translation')

  const [qty, setQty] = useState(1)

  const deliveryFromDate = getDeliveryDate(2)
  const deliveryToDate = getDeliveryDate(4)

  const history = useHistory()

  const addToCartHandler = () => history.push(`/cart/${productId}?qty=${qty}`)
  console.log(countInStock)
  return (
    <div className="cart-box">
      <h2 className="cart-box__price">{price}</h2>
      <div className="cart-box__delivery">
        {t('cartBox.deliveryDate')}:
        <span className="cart-box__date">{` ${deliveryFromDate} - ${deliveryToDate}`}</span>
      </div>

      <div className="cart-box__stock">
        {countInStock ? (
          <span className="cart-box__stock_success">
            {t('cartBox.inStock')}
          </span>
        ) : (
          <span className="cart-box__stock_danger">
            {t('cartBox.unavailable')}
          </span>
        )}
      </div>
      {countInStock && (
        <>
          <div className="cart-box__quantity">
            <div>{t('cartBox.quantity')}</div>
            <div>
              <select value={qty} onChange={e => setQty(e.target.value)}>
                {[...Array(countInStock).keys()].map(x => (
                  <option key={x++} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <CommonButton
            label={t('button.proccedToCheckout')}
            onClick={addToCartHandler}
          />
        </>
      )}
    </div>
  )
}

export default CartBox
