import './index.scss'
import { useTranslation } from 'react-i18next'
import OrderForm from '../../components/order-form'

const OrderScreen = props => {
  const { t } = useTranslation('translation')
  return (
    <div className="order-screen">
      <h1 className="order-form__info">{t('orderForm.enterInfo')}</h1>
      <OrderForm />
    </div>
  )
}

export default OrderScreen
