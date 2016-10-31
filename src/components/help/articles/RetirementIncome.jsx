import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'
import NotTheSame from '../topics/NotTheSame'


//F28, F26, F27, F24, D17-19, D5

export default class RetirementIncome extends Component {
  render() {
    return (
      <Article>
        <Standard title={help.militaryTitle} body={help.militaryBody} />
        <Standard title={help.netTitle} body={help.netBody} />
        <NotTheSame />
        <Standard title={help.childIncomeTitle} body={help.childIncomeBody} />
        <bodyLabels>Definitions</bodyLabels>
        <Standard title={define.socialSecurityTerm} body={define.socialSecurityDef} />
        <Standard title={define.blackLungTerm} body={define.blackLungDef} />
        <Standard title={define.railroadRetirementTerm} body={define.railroadRetirementDef} />
        <Standard title={define.currentTerm} body={define.currentDef} />
      </Article>
    )
  }
}
