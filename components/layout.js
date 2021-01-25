import PropTypes from 'prop-types'
import React from 'react'

import { Footer } from './footer'
import { Header } from './header'
import { Main } from './main'

const Layout = ({ children }) => (
  <div className="bg-gray-100">
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export { Layout }
