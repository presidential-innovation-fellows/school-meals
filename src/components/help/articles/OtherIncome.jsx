import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'
import NotTheSame from '../topics/NotTheSame'
import RegularCash from '../topics/RegularCash'
import WhatIncome from '../topics/WhatIncome'

//F37-38, F36, F39, F28, F26, F27, F24, D20-23, D5

export default class OtherIncome extends Component {
  render() {
    return (
      <Article>
		    <Standard title={help.rentalTitle} body={help.rentalBody} />
        <Standard title={help.interestTitle} body={help.interestBody} />
        <Standard title={help.govProgramTitle} body={help.govProgramBody} />
        <Standard title={help.seasonalTitle} body={help.seasonalBody} />
        <NotTheSame />
        <Standard title={help.grossTitle} body={help.grossBody} />
		    <Standard title={help.netTitle} body={help.netBody} />
        <WhatIncome />
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
