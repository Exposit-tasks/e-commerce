import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import { CommonButton } from '../index'

import { createOrder } from '../../redux/order/actionCreator'

import { actualDate, getDeliveryDate } from '../../utils'

import './index.scss'

const PlaceOrderSummary = () => {
  const dispatch = useDispatch()

  const { t } = useTranslation('translation')
  const cart = useSelector(state => state.cart)
  const {
    user: { id: userId }
  } = useSelector(state => state.user)

  const toRoundPrice = num => Math.round(num * 100) / 100

  cart.itemsPrice = toRoundPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  )

  const orderDate = actualDate()
  const deliveryDate = `${getDeliveryDate(2)} - ${getDeliveryDate(4)}`

  const placeOrderHandler = () => {
    const id = uuidv4()
    dispatch(
      createOrder({
        userId,
        orderDate,
        deliveryDate,
        ...cart,
        orderItems: cart.cartItems,
        id
      })
    )
  }

  return (
    <div className="place-order-summary">
      <ul className="order-summary">
        <li>
          <h2 className="order-summary__title">
            {t('place-order.orderSummary')}
          </h2>
        </li>
        <li>
          <div>
            <p className="order-summary__items">
              {t('place-order.items')} :{' '}
              <span className="order-summary__info">
                {cart.cartItems.length}
              </span>
            </p>
            <p className="order-summary__price">
              {t('place-order.totalPrice')} :{' '}
              <span className="order-summary__info">$ {cart.itemsPrice}</span>
            </p>
          </div>
        </li>
        <li>
          <CommonButton
            addClassName="order-summary__button"
            label={t('place-order.button')}
            onClick={placeOrderHandler}
          />
        </li>
      </ul>
    </div>
  )
}
export default PlaceOrderSummary
