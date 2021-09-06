import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import HeaderNav from '../../components/header-nav'

import './index.scss'

const Header = () => {
  const { t } = useTranslation('translation')

  return (
    <header>
      <Link to="/">
        <h1 className="logo">{t('header.ecommerce')}</h1>
      </Link>
      <HeaderNav />
    </header>
  )
}

export default Header
