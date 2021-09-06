import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { useTranslation } from 'react-i18next'

import './index.scss'

const UserLink = () => {
  const { user } = useSelector(state => state.user)
  const { t } = useTranslation('translation')

  return (
    <Link to="/profile" className="menu-user">
      <div className="menu-user__container">
        <i className="far fa-user" />
      </div>
      {user ? (
        <span className="menu-cart__title">{user.username}</span>
      ) : (
        <span className="menu-cart__title">{t('nav.user')}</span>
      )}
    </Link>
  )
}

export default UserLink
