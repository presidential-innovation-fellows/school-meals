import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import Household from '../topics/Household'
import RegularCash from '../topics/RegularCash'
import WhatIncome from '../topics/WhatIncome'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'

export default class ChildIncome extends Component {
  render() {
    return (
      <Article>
    		<Standard title={help.childIncomeTitle} body={help.childIncomeBody} />
    		<Standard title={help.grossTitle} body={help.grossBody} />
    		<Standard title={help.netTitle} body={help.netBody} />
        <WhatIncome />
    		<Household />
    		<Standard title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
    		<bodyLabels>Definitions</bodyLabels>
        <Standard title={define.ssiChildrenTerm} body={define.ssiChildrenDef} />
        <Standard title={define.ssSurvivorTerm} body={define.ssSurvivorDef} />
        <Standard title={define.currentTerm} body={define.currentDef} />
        <RegularCash />
        <Standard title={define.annuityChildrenTerm} body={define.annuityChildrenDef} />
        <Standard title={define.trustTerm} body={define.trustDef} />
      </Article>
    )
  }
}
