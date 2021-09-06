import { Component } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'

import CommonButton from '../common-button'

import { loginUser } from '../../redux/user/actionCreator'

import './index.scss'

const getInputData = ({ email, password }) => [
  {
    htmlFor: 'email',
    label: 'auth.email',
    type: 'text',
    name: 'email',
    value: email
  },
  {
    htmlFor: 'password',
    label: 'auth.password',
    type: 'password',
    name: 'password',
    value: password
  }
]

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    errors: ''
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value })

  getIsButtonDisabled = () => {
    const { email, password } = this.state
    return !email || !password
  }

  handleUserLogin = () => {
    const { email, password } = this.state
    let hashedPassword = window.btoa(password)

    const user = {
      email,
      hashedPassword
    }

    this.props.loginUser(user, this.props.history)
  }

  renderInputs = t =>
    getInputData(this.state).map(
      ({ htmlFor, label, name, type, placeholder, value }, idx) => (
        <div key={idx} className="form-group">
          <label htmlFor={name}>{t(label)}</label>
          <input
            value={value}
            id={name}
            type={type}
            name={name}
            required={true}
            placeholder={t(label)}
            onChange={this.handleChange}
          />
        </div>
      )
    )

  render() {
    const { t } = this.props

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">{t('auth.login')}</div>
        {!this.props.isUserFound && (
          <h1 className="auth-error">{t('auth.loginError')}</h1>
        )}
        <div className="content">
          <div className="form">{this.renderInputs(t)}</div>
        </div>
        <CommonButton
          label={t('button.login')}
          onClick={this.handleUserLogin}
          disabled={this.getIsButtonDisabled()}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ user: { isUserFound } }) => ({
  isUserFound
})

const mapDispatchToProps = dispatch => ({
  loginUser: (user, history) => dispatch(loginUser(user, history))
})

export default withTranslation('translation')(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
)
