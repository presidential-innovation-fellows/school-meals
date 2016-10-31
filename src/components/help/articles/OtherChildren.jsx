import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import Household from '../topics/Household'
import { help } from './HelpText'
import Standard from '../TopicStandard'

export default class OtherChildren extends Component {
  render() {
    return (
      <Article>
     	<Household />
		<Standard title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
		<Standard title={help.noIncomeTitle} body={help.noIncomeBody} />
      </Article>
    )
  }
}
