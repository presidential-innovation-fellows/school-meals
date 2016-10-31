import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help } from './HelpText'
import Standard from '../TopicStandard'
import WhatInformation from '../topics/WhatInformation'

export default class Attestation extends Component {
  render() {
    return (
      <Article>
      	<Standard title={help.publicChargeTitle} body={help.publicChargeBody} />
        <Standard title={help.disagreeTitle} body={help.disagreeBody} />
        <WhatInformation />
      </Article>
    )
  }
}
