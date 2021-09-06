import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { CART_ROUTE } from '../../constants/routes'

import './index.scss'

const CartLink = () => {
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  const { t } = useTranslation('translation')

  return (
    <Link to={CART_ROUTE} className="menu-cart">
      <div className="menu-cart__container">
        <i className="fas fa-shopping-cart" />
        {cartItems.length ? (
          <span className="menu-cart__orders">{cartItems.length}</span>
        ) : null}
      </div>
      <span className="menu-cart__title">{t('nav.cart')}</span>
    </Link>
  )
}

export default CartLink
