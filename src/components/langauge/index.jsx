import i18n from '../../core/i18n'

import './index.scss'

const handleLanguageChange = () => {
  const RU_LOCALE = 'ru'
  const EN_LOCALE = 'en'
  const currentLanguage = i18n.language
  const isRussianLocale = currentLanguage === RU_LOCALE

  i18n.changeLanguage(isRussianLocale ? EN_LOCALE : RU_LOCALE)
}

export const Language = () => (
  <div className="language">
    <label htmlFor="language-select">
      <i className="fas fa-globe-europe language__icon" />
    </label>
    <select
      className="language__select"
      name="language-select"
      onChange={e => handleLanguageChange(e)}
    >
      <option className="language__option" value="ru">
        РУ
      </option>
      <option className="language__option" value="en">
        EN
      </option>
    </select>
  </div>
)

export default Language
