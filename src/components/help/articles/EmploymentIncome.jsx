import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'
import NotTheSame from '../topics/NotTheSame'
import WhatIncome from '../topics/WhatIncome'
import NetSelfEmployment from '../topics/NetSelfEmployment'

//F28, F33-F35, F39, F26-27, F24, D5-D7

export default class EmploymentIncome extends Component {
  render() {
    return (
      <Article>
            <NotTheSame />
			<Standard title={help.earningsDifferencesTitle} body={help.earningsDifferencesBody} />
            <Standard title={help.selfEmployedTitle} body={help.selfEmployedBody} />
            <Standard title={help.wagesSelfemploymentTitle} body={help.wagesSelfemploymentBody} />
            <Standard title={help.seasonalTitle} body={help.seasonalBody} />
			<Standard title={help.grossTitle} body={help.grossBody} />
            <Standard title={help.netTitle} body={help.netBody} />
            <WhatIncome />            
            <Standard title={define.currentTerm} body={define.currentDef} />
            <Standard title={define.cashBonusTerm} body={define.cashBonusDef} />
            <NetSelfEmployment />
      </Article>
    )
  }
}
