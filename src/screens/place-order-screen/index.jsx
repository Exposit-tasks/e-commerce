import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import PlaceOrderSummary from '../../components/place-order-summary'
import PlaceOrderDetails from '../../components/place-order-details'
import MessageBox from '../../components/message-box'

import './index.scss'

const PlaceOrderScreen = () => {
  const { t } = useTranslation('translation')

  const cart = useSelector(state => state.cart)

  return cart.cartItems.length > 0 ? (
    <div className="place-order-screen">
      <PlaceOrderDetails />
      <PlaceOrderSummary />
    </div>
  ) : (
    <MessageBox label={t('place-order.cartEmptyMessage')} />
  )
}

export default PlaceOrderScreen
