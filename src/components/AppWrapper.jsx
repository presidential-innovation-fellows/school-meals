import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import LocaleData from '../stores/LocaleData'
import App from './App'

const localeData = new LocaleData()

// some things occasionally rely on these references (unfortunate shortcut)
window.localeData = localeData

@observer
class AppWrapper extends Component {
  render() {
    return (
      // We pass `locale` as a literal for comparison by App.componentDidUpdate
      <App localeData={localeData} locale={localeData.code} />
    )
  }
}

export default AppWrapper
