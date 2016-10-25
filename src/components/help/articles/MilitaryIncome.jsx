import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'
import ReportCombat from '../topics/ReportCombat'
import WhatIncome from '../topics/WhatIncome'
import NotTheSame from '../topics/NotTheSame'

//F29-F32, F28, F26-F27, F35, F24

export default class MilitaryIncome extends Component {
  render() {
    return (
      <Article>
			<Standard title={help.militaryTitle} body={help.militaryBody} />
            <ReportCombat />
            <Standard title={help.deipTitle} body={help.deipBody} />
            <Standard title={help.fssaTitle} body={help.fssaBody} />
            <NotTheSame />
 			<Standard title={help.grossTitle} body={help.grossBody} />
            <Standard title={help.netTitle} body={help.netBody} />
            <Standard title={help.wagesSelfemploymentTitle} body={help.wagesSelfemploymentBody} />
            <WhatIncome />            
      </Article>
    )
  }
}
