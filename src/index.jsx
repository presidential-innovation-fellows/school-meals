import 'babel-polyfill'
import 'uswds'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

render(
  <App />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default

    render(
      <NextApp />,
      document.getElementById('root')
    )
  })
}
