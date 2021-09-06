import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { CommonButton } from '../'

import { AUTH_ROUTE, ORDER_ROUTE } from '../../constants/routes'

import './index.scss'

const CartOrders = () => {
  const { t } = useTranslation('translation')

  const history = useHistory()

  const { cartItems } = useSelector(state => state.cart)

  const { user } = useSelector(state => state.user)

  const handlePush = () =>
    user ? history.push(ORDER_ROUTE) : history.push(AUTH_ROUTE)

  const totalPrice = cartItems.reduce(
    (a, c) => Math.round(a + c.price * c.qty * 100) / 100,
    0
  )

  const totalQuantity = cartItems.reduce((a, c) => a + c.qty, 0)

  return (
    <div className="cart-orders">
      <ul>
        <li>
          <h2 className="cart-orders__title">
            <span>{t('cart-orders.items')}: </span>
            <span> {totalQuantity} </span>
          </h2>
        </li>
        <li>
          <h2 className="cart-orders__title">
            <span>{t('cart-orders.price')}: </span>
            <span className="cart-orders__price">${totalPrice}</span>
          </h2>
        </li>
        <li>
          <CommonButton
            label={t('button.proccedToCheckout')}
            onClick={handlePush}
            disabled={!cartItems.length}
          />
        </li>
      </ul>
    </div>
  )
}

export default CartOrders
