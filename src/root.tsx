import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Store } from 'redux';
import App from './components/App'
import Search from './components/Search'

const Root = ({ store } : { store: Store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/search/:query" component={Search} />
    </Router>
  </Provider>
)

export default Root