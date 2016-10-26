import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'

//F5, F11-13

export default class All extends Component {
  render() {
    return (
        <Article>
            <Standard title={help.applyLaterTitle} body={help.applyLaterBody} />
            <Standard title={help.usCitizenTitle} body={help.usCitizenBody} />
            <Standard title={help.publicChargeTitle} body={help.publicChargeBody} />
            <Standard title={help.checkedTitle} body={help.checkedBody} />
        </Article>
    )
  }
}
