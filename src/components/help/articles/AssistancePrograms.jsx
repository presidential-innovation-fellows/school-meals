import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import Household from '../topics/Household'
import { help } from './HelpText'
import Standard from '../TopicStandard'

export default class AssistancePrograms extends Component {
  render() {
    return (
      <Article>
        <Standard title={help.letterTitle} body={help.letterBody} />
        <Standard title={help.localProgramTitle} body={help.localProgramBody} />
        <Standard title={help.wicTitle} body={help.wicBody} />
        <Standard title={help.otherProgramsTitle} body={help.otherProgramsBody} />
        <Household />
      </Article>
    )
  }
}
