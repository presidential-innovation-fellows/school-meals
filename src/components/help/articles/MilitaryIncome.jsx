import React, { Component } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import Topic from '../Topic'
import { help } from './HelpText'
import ReportCombat from '../topics/ReportCombat'
import WhatIncome from '../topics/WhatIncome'
import NotTheSame from '../topics/NotTheSame'

// F29-F32, F28, F26-F27, F35, F24

export default class MilitaryIncome extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
          <Topic title={help.militaryTitle} body={help.militaryBody} />
          <ReportCombat />
          <Topic title={help.deipTitle} body={help.deipBody} />
          <Topic title={help.fssaTitle} body={help.fssaBody} />
          <NotTheSame />
          <Topic title={help.grossTitle} body={help.grossBody} />
          <Topic title={help.netTitle} body={help.netBody} />
          <Topic title={help.wagesSelfemploymentTitle} body={help.wagesSelfemploymentBody} />
          <WhatIncome />
        </ArticleFaqSection>
      </Article>
    )
  }
}
