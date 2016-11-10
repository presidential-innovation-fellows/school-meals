import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import NotTheSame from '../topics/NotTheSame'
import WhatIncome from '../topics/WhatIncome'


//F28, F26, F27, F24, D12-16, D5

export default class UnemploymentIncome extends Component {
  render() {
    return (
      <Article>
        <NotTheSame />
        <Topic title={help.grossTitle} body={help.grossBody} />
        <Topic title={help.netTitle} body={help.netBody} />
        <WhatIncome />
        <bodyLabels>Definitions</bodyLabels>
        <Topic title={define.unemploymentTerm} body={define.unemploymentDef} />
        <Topic title={define.workersCompTerm} body={define.workersCompDef} />
        <Topic title={define.strikeBenefitsTerm} body={define.strikeBenefitsDef} />
        <Topic title={define.ssdiTerm} body={define.ssdiDef} />
        <Topic title={define.veteransBenefitsTerm} body={define.veteransBenefitsDef} />
        <Topic title={define.currentTerm} body={define.currentDef} />
      </Article>
    )
  }
}
