import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import { Button } from 'react-bootstrap'

import Application from './application/Application'

@observer
class App extends Component {
  render() {
    return (
      <div>
        <DevTools />
        <Application />
      </div>
    )
  }
}

export default App
