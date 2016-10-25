import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'
import NotTheSame from '../topics/NotTheSame'
import WhatIncome from '../topics/WhatIncome'


//F28, F26, F27, F24, D12-16, D5

export default class UnemploymentIncome extends Component {
  render() {
    return (
      <Article>
            <NotTheSame />
            <Standard title={help.grossTitle} body={help.grossBody} />
            <Standard title={help.netTitle} body={help.netBody} />
            <WhatIncome />
            <Standard title={define.unemploymentTerm} body={define.unemploymentDef} />
            <Standard title={define.workersCompTerm} body={define.workersCompDef} />
            <Standard title={define.strikeBenefitsTerm} body={define.strikeBenefitsDef} />
            <Standard title={define.ssdiTerm} body={define.ssdiDef} />
            <Standard title={define.veteransBenefitsTerm} body={define.veteransBenefitsDef} />
            <Standard title={define.currentTerm} body={define.currentDef} />
      </Article>
    )
  }
}
