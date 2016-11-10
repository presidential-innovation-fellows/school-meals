import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import Household from '../topics/Household'
import { help } from './HelpText'

export default class OtherChildren extends Component {
  render() {
    return (
      <Article>
     	<Household />
	<Topic title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
	<Topic title={help.noIncomeTitle} body={help.noIncomeBody} />
      </Article>
    )
  }
}
