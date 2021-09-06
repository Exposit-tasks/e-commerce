import { useContext } from 'react'
import { ThemeContext } from '../../context'

import './index.scss'

const ThemeChange = () => {
  const { themeDark, changeThemeDark } = useContext(ThemeContext)

  return (
    <div className="change-theme-container">
      <input
        onChange={changeThemeDark}
        checked={themeDark}
        type="checkbox"
        id="change-theme"
      />
      <label htmlFor="change-theme">Toggle</label>
    </div>
  )
}

export default ThemeChange
