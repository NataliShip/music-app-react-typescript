import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { configStore } from './configStore'
import App from './components/App/App'
import './index.scss'

const store = configStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={App} />
        {/*<Route path='/track/:id' component={TrackPage} />*/}
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
