import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ABOUT_ROUTE, CONTACT_ROUTE } from '../../constants/routes'

import './index.scss'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer>
      <ul>
        <li>
          <Link to={CONTACT_ROUTE}>{t('footer.contacts')}</Link>
        </li>
        <li>
          <Link to={ABOUT_ROUTE}>{t('footer.about')}</Link>
        </li>
      </ul>
      <h2>{t('footer.rightsReserved')}</h2>
    </footer>
  )
}

export default Footer
