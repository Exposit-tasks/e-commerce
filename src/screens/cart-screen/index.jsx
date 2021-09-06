import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import CartOrders from '../../components/cart-orders'
import MessageBox from '../../components/message-box'

import { addToCart, removeFromCart } from '../../redux/cart/actionCreator'

import './index.scss'

const CartScreen = props => {
  const { t } = useTranslation('translation')

  const productId = props.match.params.id
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  const dispatch = useDispatch()

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=order')
  }

  return cart.cartItems.length > 0 ? (
    <div className="cart-screen">
      <div className="col-1">
        <ul>
          {cartItems.map(item => (
            <li key={item.product}>
              <div className="cart-product">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-product__img"
                  />
                </div>
                <div className="cart-product__tittle">
                  <Link to={`/products/${item.product}`}>{t(item.title)}</Link>
                </div>
                <div className="cart-product__select">
                  <select
                    value={item.qty}
                    onChange={e =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map(x => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cart-product__price">${item.price}</div>
                <div className="cart-product__delete">
                  <button onClick={() => removeFromCartHandler(item.product)}>
                    <i className="fas fa-times cart-product__delete-cross" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-2">
        <CartOrders onClick={checkoutHandler} />
      </div>
    </div>
  ) : (
    <MessageBox label={t('place-order.cartEmptyMessage')} />
  )
}

export default CartScreen
