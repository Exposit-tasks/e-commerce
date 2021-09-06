import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { actualDate } from '../../utils'

import { LoadingBox, MessageBox } from '../../components'

import { userOrderList } from '../../redux/order/actionCreator'

import './index.scss'

const OrderHistoryScreen = () => {
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const [isProcessing, setIsProcessing] = useState()

  const {
    user: { id: userId }
  } = useSelector(state => state.user)

  useEffect(() => {
    setIsProcessing(true)
    dispatch(userOrderList(userId)).finally(() => setIsProcessing(false))
  }, [])

  const { order: orderList } = useSelector(state => state.order)

  const isDeliveryOrdered = order =>
    new Date(order.deliveryDate.split('-')[1]) <= new Date(actualDate())

  return isProcessing ? (
    <LoadingBox />
  ) : orderList ? (
    <div className="order-history-screen">
      <table className="order-history-table">
        <thead>
          <tr>
            <th>{t('orderHistory.orderId')}</th>
            <th>{t('orderHistory.orderDate')}</th>
            <th>{t('orderHistory.orderDeliveryDate')}</th>
            <th>{t('orderHistory.orderPrice')}</th>
            <th>{t('orderHistory.orderMethod')}</th>
            <th>{t('orderHistory.orderDelivered')}</th>
          </tr>
        </thead>

        <tbody>
          {orderList.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.orderDate}</td>
              <td>{order.deliveryDate}</td>
              <td>${order.itemsPrice}</td>
              <td>{t(`orderHistory.${order.orderData.payment}`)}</td>
              <td>
                {isDeliveryOrdered(order)
                  ? t('orderHistory.yes')
                  : t('orderHistory.no')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <MessageBox label={t('place-order.cartEmptyMessage')} />
  )
}

export default OrderHistoryScreen
