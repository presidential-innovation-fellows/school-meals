import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import App from './App'

@observer
class AppWrapper extends Component {
  render() {
    return (
      <App />
    )
  }
}

export default AppWrapper
