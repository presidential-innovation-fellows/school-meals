import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'
import NotTheSame from '../topics/NotTheSame'


//F28, F26, F27, F24, F16, D10-11, D5

export default class SpousalIncome extends Component {
  render() {
    return (
      <Article>
        <Standard title={help.militaryTitle} body={help.militaryBody} />
        <Standard title={help.netTitle} body={help.netBody} />
        <NotTheSame />
        <Standard title={help.childIncomeTitle} body={help.childIncomeBody} />
        <Standard title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
        <bodyLabels>Definitions</bodyLabels>
        <Standard title={define.alimonyTerm} body={define.alimonyDef} />
        <Standard title={define.childSupportTerm} body={define.childSupportDef} />
       	<Standard title={define.currentTerm} body={define.currentDef} />
      </Article>
    )
  }
}
