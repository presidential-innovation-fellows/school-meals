import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'

//F41, F11-13

export default class Signature extends Component {
  render() {
    return (
      <Article>
            <Standard title={help.ssnTitle} body={help.ssnBody} />
            <Standard title={help.usCitizenTitle} body={help.usCitizenBody} />
            <Standard title={help.publicChargeTitle} body={help.publicChargeBody} />
            <Standard title={help.checkedTitle} body={help.checkedBodY} />
      </Article>
    )
  }
}
