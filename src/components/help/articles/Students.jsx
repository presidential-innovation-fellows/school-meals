import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help } from './HelpText'
import Household from '../topics/Household'

export default class Students extends Component {
  render() {
    return (
      <Article>
        <Topic title={help.childAppTitle} body={help.childAppBody} />
        <Topic title={help.headStartTitle} body={help.headStartBody} />
        <Household />
        <Topic title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
      </Article>
    )
  }
}
