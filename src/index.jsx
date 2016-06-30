import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import AppState from './stores/AppState'
import App from './components/App'
import Layout from './Layout'

const appState = new AppState()

render(
  <Layout>
    <App />
  </Layout>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default

    render(
      <Layout>
        <NextApp />
      </Layout>,
      document.getElementById('root')
    )
  })
}
