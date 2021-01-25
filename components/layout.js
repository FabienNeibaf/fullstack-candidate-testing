import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import React from 'react'

import { Footer } from './footer'
import { Header } from './header'
import { Main } from './main'

import store from '../store'

const Layout = ({ children }) => (
  <Provider store={store}>
    <div className="bg-gray-100">
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  </Provider>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export { Layout }
