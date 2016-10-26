import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'

//F5, F10, F12-13, F43

export default class All extends Component {
  render() {
    return (
        <Article>
            <Standard title={help.applyLaterTitle} body={help.applyLaterBody} />
            <Standard title={help.otherProgramsTitle} body={help.otherProgramsBody} />
            <Standard title={help.publicChargeTitle} body={help.publicChargeBody} />
            <Standard title={help.checkedTitle} body={help.checkedBody} />
            <Standard title={help.disagreeTitle} body={help.disagreeBody} />
        </Article>
    )
  }
}
