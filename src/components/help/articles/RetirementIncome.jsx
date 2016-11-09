import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'
import NotTheSame from '../topics/NotTheSame'
import WhatIncome from '../topics/WhatIncome'


//F28, F26, F27, F24, D17-19, D5

export default class RetirementIncome extends Component {
  render() {
    return (
      <Article>
        <NotTheSame />
        <Standard title={help.grossTitle} body={help.grossBody} />
        <Standard title={help.netTitle} body={help.netBody} />
        <WhatIncome />
        <bodyLabels>Definitions</bodyLabels>
        <Standard title={define.socialSecurityTerm} body={define.socialSecurityDef} />
        <Standard title={define.blackLungTerm} body={define.blackLungDef} />
        <Standard title={define.railroadRetirementTerm} body={define.railroadRetirementDef} />
        <Standard title={define.currentTerm} body={define.currentDef} />
      </Article>
    )
  }
}
