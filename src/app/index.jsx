import { useContext } from 'react'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import classNames from 'classnames'

import { ThemeContext } from '../context/'

import { PrivateRoute } from '../components'

import {
  HomeScreen,
  ContactScreen,
  AboutScreen,
  ProductScreen,
  CartScreen,
  ProfileScreen,
  OrderScreen,
  PlaceOrderScreen,
  OrderHistoryScreen,
  AuthScreen
} from '../screens'

import { Header, Footer } from '../layout'

import {
  AUTH_ROUTE,
  CART_ID_ROUTE,
  CONTACT_ROUTE,
  INDEX_ROUTE,
  ORDER_HISTORY_ROUTE,
  ORDER_ROUTE,
  CONFIRM_ORDER_ROUTE,
  PRODUCTS_ID_ROUTE,
  PROFILE_ROUTE,
  ABOUT_ROUTE
} from '../constants/routes'

import './index.scss'

const App = () => {
  const { themeDark } = useContext(ThemeContext)

  return (
    <BrowserRouter>
      <div className={classNames('app', { dark: themeDark })}>
        <Header />
        <main>
          <Switch>
            <Route exact path={INDEX_ROUTE} component={HomeScreen} />
            <Route path={PRODUCTS_ID_ROUTE} component={ProductScreen} />
            <Route path={CONTACT_ROUTE} component={ContactScreen} />
            <Route path={ABOUT_ROUTE} component={AboutScreen} />
            <Route path={AUTH_ROUTE} component={AuthScreen} />
            <Route path={CART_ID_ROUTE} component={CartScreen} />
            <Route path={PROFILE_ROUTE} component={ProfileScreen} />
            <PrivateRoute path={ORDER_ROUTE} component={OrderScreen} />
            <PrivateRoute
              path={CONFIRM_ORDER_ROUTE}
              component={PlaceOrderScreen}
            />
            <PrivateRoute
              path={ORDER_HISTORY_ROUTE}
              component={OrderHistoryScreen}
            />
            <Redirect to={INDEX_ROUTE} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
