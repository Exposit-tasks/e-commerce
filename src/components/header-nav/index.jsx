import { CartLink, Language, ThemeChange, UserLink } from '../index'

import './index.scss'

const HeaderNav = () => (
  <div className="header-nav">
    <ThemeChange />
    <Language />
    <UserLink />
    <CartLink />
  </div>
)

export default HeaderNav
