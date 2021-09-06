import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

import { AUTH_ROUTE } from '../../constants/routes'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector(state => state.user)

  return (
    <Route
      {...rest}
      render={props =>
        !user ? <Redirect to={AUTH_ROUTE} /> : <Component {...props} />
      }
    />
  )
}

export default PrivateRoute
