import { useTranslation } from 'react-i18next'

import './index.scss'

const LoadingBox = () => {
  const { t } = useTranslation('translation')
  return (
    <div className="loading-container">
      <i className="fa fa-spinner fa-spin loading" />
      {t('loading')}
    </div>
  )
}

export default LoadingBox
