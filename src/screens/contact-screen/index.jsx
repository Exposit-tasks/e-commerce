import './index.scss'
import { useTranslation } from 'react-i18next'

const ContactScreen = props => {
  const { t } = useTranslation('translation')

  return (
    <>
      <div className="contact">
        <h1 className="contact__title">{t('contact.title')}</h1>
        <h3> {t('contact.subTitle')} </h3>
        <p className="contact__address">{t('contact.address')}</p>
        <p className="contact__info">
          {t('contact.phone')}:{' '}
          <a className="contact__phone" href="tel:+12677599000">
            +1-267-759-9000{' '}
          </a>
          <b> • </b>
          {t('contact.fax')}:{' '}
          <a className="contact__phone" href="fax:+12677598989">
            +1-267-759-8989
          </a>
        </p>
        <p>
          <a
            className="contact__mail"
            href="mailto:sales@e-commerce.by"
            target="_parent"
          >
            sales@e-commerce.by
          </a>
        </p>
      </div>
    </>
  )
}

export default ContactScreen
