import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

import { NAV_DATA } from './data'

import './index.scss'

const Nav = () => {
  const { t } = useTranslation('translation')

  const NavList = () =>
    NAV_DATA.map(({ label, link }, idx) => (
      <li key={idx} className="menu__item">
        <NavLink to={link}>{t(label)}</NavLink>
      </li>
    ))

  return (
    <nav>
      <ul className="menu">
        <NavList />
      </ul>
      <div className="cart-link">

      </div>
    </nav>
  )
}

export default Nav
