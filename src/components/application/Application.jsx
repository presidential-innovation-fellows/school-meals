import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Welcome from './slides/Welcome'
import BeforeYouBegin from './slides/BeforeYouBegin'

@observer
class Application extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <BeforeYouBegin />
      </div>
    )
  }
}

export default Application
