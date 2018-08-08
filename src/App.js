import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import Header from './header.js';
import Footer from './footer.js';

import './app.scss'

const App = () => (
  <Router>
    <div>
      <Header />
      <div className="content">
        <Routes />
      </div>
      <Footer />
    </div>
  </Router>
)

export default hot(module)(App)
