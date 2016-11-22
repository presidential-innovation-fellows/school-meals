import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help } from './HelpText'
import WhatInformation from '../topics/WhatInformation'

export default class Attestation extends Component {
  render() {
    return (
      <Article>
      	<Topic title={help.publicChargeTitle} body={help.publicChargeBody} />
        <Topic title={help.checkedTitle} body={help.checkedBody} />
        <WhatInformation />
      </Article>
    )
  }
}
