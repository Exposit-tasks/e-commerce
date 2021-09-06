import { useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { CommonButton, FormInput } from '../index'

import { saveOrderData } from '../../redux/cart/actionCreator'

import { CONFIRM_ORDER_ROUTE } from '../../constants/routes'

import './index.scss'

const OrderForm = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation('translation')

  const [userOrder, setUserOrder] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    house: '',
    payment: 'cash'
  })

  //TODO add validation

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    house: '',
    payment: 'cash'
  })

  const { fullName, phone, city, house, payment } = userOrder

  const orderData = useMemo(
    () => ({
      customerInfo: [
        {
          name: 'fullName',
          value: fullName,
          label: 'orderForm.customerInfo.name',
          type: 'text'
        },
        {
          name: 'phone',
          value: phone,
          label: 'orderForm.customerInfo.phone',
          type: 'phone'
        }
      ],
      address: [
        {
          name: 'city',
          value: city,
          label: 'orderForm.addressInfo.city',
          type: 'text'
        },
        {
          name: 'house',
          value: house,
          label: 'orderForm.addressInfo.house',
          type: 'text'
        }
      ],
      payment: [
        {
          label: 'orderForm.paymentInfo.cash',
          name: 'payment',
          value: 'cash'
        },
        {
          label: 'orderForm.paymentInfo.card',
          name: 'payment',
          value: 'card'
        }
      ]
    }),
    [
      fullName,
      phone,
      city,
      house,
      errors.fullName,
      errors.email,
      errors.phone,
      errors.city,
      errors.house
    ]
  )

  const isButtonDisabled =
    !fullName ||
    !phone ||
    !city ||
    !house ||
    errors.fullName ||
    errors.phone ||
    errors.city ||
    errors.house

  const history = useHistory()

  const submitHandler = e => {
    e.preventDefault()
    dispatch(saveOrderData({ fullName, phone, city, house, payment }))
    history.push(CONFIRM_ORDER_ROUTE)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setUserOrder({ ...userOrder, [name]: value })
  }

  return (
    <form className="order-form">
      <div className="order-form__container">
        {orderData.customerInfo.map(
          (
            { name, value, label, error, type, maxLength, minLength },
            index
          ) => (
            <FormInput
              key={index}
              name={name}
              value={value}
              label={t(label)}
              error={error}
              type={type}
              required={true}
              onChange={handleChange}
            />
          )
        )}
      </div>
      <div className="order-form__container">
        {orderData.address.map(({ name, value, label, error, type }, index) => (
          <FormInput
            key={index}
            name={name}
            value={value}
            label={t(label)}
            error={error}
            type={type}
            onChange={handleChange}
          />
        ))}
      </div>
      <div className="order-form__container">
        {orderData.payment.map(({ label, name, value }, index) => (
          <div key={index} className="order-form__group">
            <label className="order-form__label">{t(label)}</label>
            <input
              className="order-form__input"
              onChange={e =>
                setUserOrder({
                  ...userOrder,
                  payment: e.target.value
                })
              }
              defaultChecked={!index}
              value={value}
              type="radio"
              name={name}
              id={value}
            />
          </div>
        ))}
      </div>
      <CommonButton
        addClassName={'order-form__button'}
        onClick={submitHandler}
        label={t('button.order')}
        disabled={isButtonDisabled}
      />
    </form>
  )
}

export default OrderForm
