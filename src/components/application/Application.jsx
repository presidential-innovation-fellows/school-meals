import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Welcome from './slides/Welcome'

@observer
class Application extends Component {
  render() {
    return (
      <div>
        <Welcome />
      </div>
    )
  }
}

export default Application
