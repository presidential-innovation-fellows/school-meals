import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Welcome from './slides/Welcome'
import BeforeYouBegin from './slides/BeforeYouBegin'
import LegalStatements from './slides/LegalStatements'
import Attestation from './slides/Attestation'

@observer
class Application extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <BeforeYouBegin />
        <LegalStatements />
        <Attestation />
      </div>
    )
  }
}

export default Application
