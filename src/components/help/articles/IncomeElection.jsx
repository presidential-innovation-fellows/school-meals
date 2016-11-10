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
        <Stopic title={help.qualifyRunawayTitle} body={help.qualifyRunawayBody} />
        <WhatInformation />
        <WhatIncome />
        <Stopic title={help.applyLaterTitle} body={help.applyLaterBody} />
        <Stopic title={help.publicChargeTitle} body={help.publicChargeBody} />
        <bodyLabels>Definitions</bodyLabels>
        <Stopic title={define.mckinneyTerm} body={define.mckinneyDef} />
        <Stopic title={define.mepTerm} body={define.mepDef} />
        <Stopic title={define.runawayHomelessActTerm} body={define.runawayHomelessActDef} />
      </Article>
    )
  }
}
