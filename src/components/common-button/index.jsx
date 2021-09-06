import classNames from 'classnames'
import PropTypes from 'prop-types'

import './index.scss'

const CommonButton = ({ label, primary, disabled, onClick, addClassName }) => (
  <button
    type="submit"
    disabled={disabled}
    onClick={onClick}
    className={classNames(`common-button ${addClassName}`, {
      primary,
      disabled
    })}
  >
    {label}
  </button>
)

export default CommonButton

CommonButton.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool
}

CommonButton.defaultProps = {
  primary: false
}
