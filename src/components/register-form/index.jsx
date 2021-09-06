import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import CommonButton from '../common-button'

import { createUser } from '../../redux/user/actionCreator'

import './index.scss'

const getInputData = ({ username, email, password }) => [
  {
    htmlFor: 'username',
    label: 'auth.username',
    type: 'text',
    name: 'username',
    value: username
  },
  {
    htmlFor: 'email',
    label: 'auth.email',
    type: 'email',
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

class RegisterForm extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    errors: ''
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value })

  getIsButtonDisabled = () => {
    const { username, email, password } = this.state
    return !username || !email || !password
  }

  handleUserCreate = () => {
    const { username, email, password } = this.state
    const { createUser, history } = this.props

    let userId = uuidv4()
    let hashedPassword = window.btoa(password)

    const updatedUser = {
      id: userId,
      username,
      email,
      hashedPassword
    }
    createUser(updatedUser, history)
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
            placeholder={t(label)}
            onChange={this.handleChange}
          />
        </div>
      )
    )

  render() {
    const { t, isUserExist, containerRef } = this.props

    return (
      <div className="base-container" ref={containerRef}>
        <div className="header">{t('auth.register')}</div>
        <div className="content">
          {isUserExist ? (
            <h1 className="auth-error">{t('auth.registerError')}</h1>
          ) : null}
          <div className="form">{this.renderInputs(t)}</div>
        </div>
        <CommonButton
          label={t('auth.register')}
          onClick={this.handleUserCreate}
          disabled={this.getIsButtonDisabled()}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createUser: (user, history) => dispatch(createUser(user, history))
})

const mapStateToProps = ({ user: { isUserExist } }) => ({
  isUserExist
})

export default withRouter(
  withTranslation('translation')(
    connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
  )
)
