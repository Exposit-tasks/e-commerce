import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import './index.scss'

const PlaceOrderDetails = () => {
  const {
    cartItems,
    orderData: { house, fullName, city, payment }
  } = useSelector(state => state.cart)
  const { t } = useTranslation('translation')

  const toRoundPrice = num => Math.round(num * 100) / 100

  return (
    <div className="place-order-details">
      <ul className="order-details">
        <li>
          <div>
            <h3>{t('place-order.confirmationOfOrder')} :</h3>
            <p>
              <span>{t('place-order.name')} :</span> {fullName}
            </p>
            <p>
              <span>{t('place-order.address')} :</span>
              {`${city}, ${house}`}
            </p>
          </div>
        </li>
        <li>
          <div>
            <h3>{t('place-order.payment')} :</h3>
            <p>
              <span>{t('place-order.method')} : </span>
              {payment === 'cash'
                ? t('place-order.cash')
                : t('place-order.card')}
            </p>
          </div>
        </li>
      </ul>
      <div className="cart-items-details">
        <h3>{t('place-order.orderItems')}</h3>
        <ul>
          {cartItems.map(item => (
            <li key={item.product}>
              <div className="cart-product">
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-product__img"
                  />
                </div>
                <div className="cart-product__tittle">
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </div>
                <div className="cart-product__price">
                  {/*TODO getOut logic*/}
                  {item.qty} x ${item.price} = $
                  {toRoundPrice(item.qty * item.price)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PlaceOrderDetails
