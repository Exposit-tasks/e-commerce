import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { CommonButton } from '../../components'

import { AUTH_ROUTE } from '../../constants/routes'

import './index.scss'

const ProfileNotRegistered = () => {
  const { t } = useTranslation('translation')

  const history = useHistory()

  const signInHandler = () => history.push(AUTH_ROUTE)

  return (
    <div className="profile-not-registered">
      <img
        src="https://mstatic.wbstatic.net/sitemobile/4.4.1/static/media/photo-user-icon.e1d91030.svg"
        alt="user-icon"
      />
      <h1>{t('profile.notRegistered.enterProfile')}</h1>
      <p>{t('profile.notRegistered.loginMotivation')}</p>

      <CommonButton
        onClick={signInHandler}
        label={t('profile.notRegistered.letsLogin')}
        addClassName={'profile-button'}
      />
    </div>
  )
}

export default ProfileNotRegistered
