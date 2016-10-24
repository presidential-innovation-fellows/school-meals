import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help } from './HelpText'
import Standard from '../TopicStandard'
import Household from '../topics/Household'


export default class Foster extends Component {
  render() {
    return (
        <Article>
            <Standard title={help.permanentTitle} body={help.permanentBody} />
            <Standard title={help.fosterQualifyTitle} body={help.fosterQualifyBody} />
            <Standard title={help.fosterTitle} body={help.fosterBody} />
            <Household />
            <Standard title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
            <Standard title={help.childAppTitle} body={help.childAppBody} />
        </Article>
    )
  }
}
