import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { organization } from '../../../config'
import WhatIncome from '../topics/WhatIncome'
import QualifyMigrant from '../topics/QualifyMigrant'
import QualifyHomeless from '../topics/QualifyHomeless'
import Household from '../topics/Household'
import { help, define } from './HelpText'

export default class OtherPrograms extends Component {
  render() {
    return (
      <Article>
      	<QualifyMigrant />
      	<QualifyHomeless />
	<Topic title={help.qualifyRunawayTitle} body={help.qualifyRunawayBody} />
	<Household />
	<Topic title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
	<Topic title={help.usCitizenTitle} body={help.usCitizenBody} />
	<Topic title={help.publicChargeTitle} body={help.publicChargeBody} />
	<Topic title={help.otherProgramsTitle} body={help.otherProgramsBody} />
	<Topic title={help.childAppTitle} body={help.childAppBody} />
	<bodyLabels>Definitions</bodyLabels>
	<Topic title={define.mckinneyTerm} body={define.mckinneyDef} />
	<Topic title={define.mepTerm} body={define.mepDef} />
	<Topic title={define.runawayHomelessActTerm} body={define.runawayHomelessActDef} />
      </Article>
    )
  }
}
