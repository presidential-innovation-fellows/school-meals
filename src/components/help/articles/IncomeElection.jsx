import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import WhatInformation from '../topics/WhatInformation'
import QualifyHomeless from '../topics/QualifyHomeless'
import QualifyMigrant from '../topics/QualifyMigrant'
import WhatIncome from '../topics/WhatIncome'


export default class IncomeElection extends Component {
  render() {
    return (
      <Article>
        <QualifyMigrant />
        <QualifyHomeless />
        <Topic title={help.qualifyRunawayTitle} body={help.qualifyRunawayBody} />
        <WhatInformation />
        <WhatIncome />
        <Topic title={help.applyLaterTitle} body={help.applyLaterBody} />
        <Topic title={help.publicChargeTitle} body={help.publicChargeBody} />
        <bodyLabels>Definitions</bodyLabels>
        <Topic title={define.mckinneyTerm} body={define.mckinneyDef} />
        <Topic title={define.mepTerm} body={define.mepDef} />
        <Topic title={define.runawayHomelessActTerm} body={define.runawayHomelessActDef} />
      </Article>
    )
  }
}
