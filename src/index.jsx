import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import ApplicationData from './stores/ApplicationData'
import App from './components/App'
import Layout from './Layout'

const applicationData = new ApplicationData()

render(
  <Layout>
    <App applicationData={applicationData} />
  </Layout>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default

    render(
      <Layout>
        <NextApp applicationData={applicationData} />
      </Layout>,
      document.getElementById('root')
    )
  })
}
