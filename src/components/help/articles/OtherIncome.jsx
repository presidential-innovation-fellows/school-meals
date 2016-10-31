import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'
import NotTheSame from '../topics/NotTheSame'
import RegularCash from '../topics/RegularCash'

//F37-38, F36, F39, F28, F26, F27, F24, D20-23, D5

export default class OtherIncome extends Component {
  render() {
    return (
      <Article>
		    <Standard title={help.interestTitle} body={help.interestBody} />
        <Standard title={help.seasonalTitle} body={help.seasonalBody} />
        <Standard title={help.rentalTitle} body={help.rentalBody} />
        <Standard title={help.noIncomeTitle} body={help.noIncomeBody} />
        <Standard title={help.militaryTitle} body={help.militaryBody} />
		    <Standard title={help.netTitle} body={help.netBody} />
        <NotTheSame />
        <Standard title={help.childIncomeTitle} body={help.childIncomeBody} />
        <bodyLabels>Definitions</bodyLabels>
        <RegularCash />
        <Standard title={define.pensionTerm} body={define.pensionDef} />
        <Standard title={define.annuityTerm} body={define.annuityDef} />
        <Standard title={define.trustTerm} body={define.trustDef} />
        <Standard title={define.currentTerm} body={define.currentDef} />
      </Article>
    )
  }
}
