import { PureComponent } from 'react'
import { withTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import './index.scss'

class BackLink extends PureComponent {
  render() {
    return (
      <button className="back-link" onClick={this.props.path}>
        <i className="fas fa-long-arrow-alt-left back-link__arrow" />
      </button>
    )
  }
}

export default withTranslation('translation')(BackLink)

BackLink.propTypes = {
  path: PropTypes.func
}
