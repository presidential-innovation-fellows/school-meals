import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Household from '../topics/Household'

//F15, F40, F17

export default class Adults extends Component {
  render() {
    return (
      <Article>
        <Household />
        <Topic title={help.noIncomeTitle} body={help.noIncomeBody} />
        <Topic title={help.deployedTitle} body={help.deployedBody} />
      </Article>
    )
  }
}
