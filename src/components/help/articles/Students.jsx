import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help } from './HelpText'
import Standard from '../TopicStandard'
import Household from '../topics/Household'

export default class Students extends Component {
  render() {
    return (
      <Article>
        <Standard title={help.childAppTitle} body={help.childAppBody} />
        <Standard title={help.headStartTitle} body={help.headStartBody} />
        <Household />
        <Standard title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
      </Article>
    )
  }
}
