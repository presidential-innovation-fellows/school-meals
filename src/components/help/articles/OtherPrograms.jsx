import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { organization } from '../../../config'
import WhatIncome from '../topics/WhatIncome'
import QualifyMigrant from '../topics/QualifyMigrant'
import Household from '../topics/Household'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'

export default class OtherPrograms extends Component {
  render() {
    return (
      <Article>
      	<QualifyMigrant />
		<Standard title={help.qualifyRunawayTitle} body={help.qualifyRunawayBody} />
		<WhatIncome />
		<Household />
		<Standard title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
		<Standard title={help.usCitizenTitle} body={help.usCitizenBody} />
		<Standard title={help.publicChargeTitle} body={help.publicChargeBody} />
		<Standard title={help.otherProgramsTitle} body={help.otherProgramsBody} />
		<Standard title={help.childAppTitle} body={help.childAppBody} />
		<Standard title={define.mckinneyTerm} body={define.mckinneyDef} />
		<Standard title={define.mepTerm} body={define.mepDef} />
		<Standard title={define.runawayHomelessActTerm} body={define.runawayHomelessActDef} />
      </Article>
    )
  }
}
