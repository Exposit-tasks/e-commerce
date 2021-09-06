import { Component } from 'react'
import { useTranslation, withTranslation } from 'react-i18next'

import { LoginForm, RegisterForm } from '../../components'

import './index.scss'

class AuthScreen extends Component {
  state = {
    isLogginActive: true
  }

  componentDidMount() {
    this.rightSide.classList.add('right')
  }

  changeState() {
    const { isLogginActive } = this.state

    if (isLogginActive) {
      this.rightSide.classList.remove('right')
      this.rightSide.classList.add('left')
    } else {
      this.rightSide.classList.remove('left')
      this.rightSide.classList.add('right')
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }))
  }

  render() {
    const { t } = this.props
    const { isLogginActive } = this.state
    const current = isLogginActive ? t('auth.register') : t('auth.login')
    const currentActive = isLogginActive ? 'login-form' : 'register'

    const history = this.props.history

    return (
      <div className="auth-screen">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <LoginForm
                history={history}
                containerRef={ref => (this.current = ref)}
              />
            )}
            {!isLogginActive && (
              <RegisterForm
                history={history}
                containerRef={ref => (this.current = ref)}
              />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    )
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="inner-container__text">{props.current}</div>
      </div>
    </div>
  )
}

export default withTranslation('translation')(AuthScreen)
