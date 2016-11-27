import React, { Component } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import ArticleDefinitionSection from '../ArticleDefinitionSection'
import Topic from '../Topic'
import { define, help } from './HelpText'
import NotTheSame from '../topics/NotTheSame'
import WhatIncome from '../topics/WhatIncome'
import NetSelfEmployment from '../topics/NetSelfEmployment'

// F28, F33-F35, F39, F26-27, F24, D5-D7

export default class EmploymentIncome extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
          <NotTheSame />
          <Topic title={help.earningsDifferencesTitle} body={help.earningsDifferencesBody} />
          <Topic title={help.selfEmployedTitle} body={help.selfEmployedBody} />
          <Topic title={help.wagesSelfemploymentTitle} body={help.wagesSelfemploymentBody} />
          <Topic title={help.seasonalTitle} body={help.seasonalBody} />
          <Topic title={help.grossTitle} body={help.grossBody} />
          <Topic title={help.netTitle} body={help.netBody} />
          <WhatIncome />
        </ArticleFaqSection>
        <ArticleDefinitionSection>
          <Topic title={define.currentTerm} body={define.currentDef} />
          <Topic title={define.cashBonusTerm} body={define.cashBonusDef} />
          <NetSelfEmployment />
        </ArticleDefinitionSection>
      </Article>
    )
  }
}
