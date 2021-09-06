import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { CommonButton } from '../../components'

import { logout } from '../../redux/user/actionCreator'

import './index.scss'

const ProfileRegistered = () => {
  const { t } = useTranslation('translation')

  const dispatch = useDispatch()
  const history = useHistory()

  const { user } = useSelector(state => state.user)

  const logoutHandler = () => dispatch(logout())

  const pushToOrderHistory = () => history.push('/order-history')

  return (
    <div className="profile-registered">
      <i className="far fa-smile profile-registered__icon" />
      <h1>{t('profile.registered.userInfo')}</h1>
      <div className="profile-information">
        <p>{t('profile.registered.username')}:&nbsp;</p>
        <span className="profile-information__user-info">{user.username}</span>
        <p>{t('profile.registered.userMail')}:&nbsp;</p>
        <span className="profile-information__user-info">{user.email}</span>
      </div>
      <div className="profile-information__button-container">
        <CommonButton
          label={t('profile.registered.orderHistory')}
          onClick={pushToOrderHistory}
          addClassName="primary"
        />
      </div>
      <div className="profile-information__button-container">
        <CommonButton
          onClick={logoutHandler}
          label={t('profile.registered.logout')}
          addClassName="primary"
        />
      </div>
    </div>
  )
}

export default ProfileRegistered
