import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'
import NotTheSame from '../topics/NotTheSame'

//F36, F28, F26-27, F24, D8-9, D5

export default class PublicAssistanceIncome extends Component {
  render() {
    return (
      <Article>
	    <Standard title={help.rentalTitle} body={help.rentalBody} />
	    <Standard title={help.militaryTitle} body={help.militaryBody} />
	    <Standard title={help.netTitle} body={help.netBody} />
	    <NotTheSame />
	    <Standard title={help.childIncomeTitle} body={help.childIncomeBody} />
	    <bodyLabels>Definitions</bodyLabels>
	    <Standard title={define.ssiTerm} body={define.ssiDef} />
	    <Standard title={define.cashAssistanceTerm} body={define.cashAssistanceDef} />
	    <Standard title={define.currentTerm} body={define.currentDef} />
      </Article>
    )
  }
}
