import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './app'
import Search from './search'

const Root = ({ store } : { store: any }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/search" component={Search} />
    </Router>
  </Provider>
)

export default Root