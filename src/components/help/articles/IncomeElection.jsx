import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'
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
            <Standard title={help.qualifyRunawayTitle} body={help.qualifyRunawayBody} />
            <WhatInformation />
            <WhatIncome />
            <Standard title={help.applyLaterTitle} body={help.applyLaterBody} />
            <Standard title={help.publicChargeTitle} body={help.publicChargeBody} />
            <Standard title={define.mckinneyTerm} body={define.mckinneyDef} />
            <Standard title={define.mepTerm} body={define.mepDef} />
            <Standard title={define.runawayHomelessActTerm} body={define.runawayHomelessActDef} />
        </Article>
    )
  }
}
