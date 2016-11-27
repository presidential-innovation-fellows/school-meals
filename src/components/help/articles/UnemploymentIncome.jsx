import React, { Component } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import ArticleDefinitionSection from '../ArticleDefinitionSection'
import Topic from '../Topic'
import { define, help } from './HelpText'
import NotTheSame from '../topics/NotTheSame'
import WhatIncome from '../topics/WhatIncome'


// F28, F26, F27, F24, D12-16, D5

export default class UnemploymentIncome extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
          <NotTheSame />
          <Topic title={help.grossTitle} body={help.grossBody} />
          <Topic title={help.netTitle} body={help.netBody} />
          <WhatIncome />
        </ArticleFaqSection>
        <ArticleDefinitionSection>
          <Topic title={define.unemploymentTerm} body={define.unemploymentDef} />
          <Topic title={define.workersCompTerm} body={define.workersCompDef} />
          <Topic title={define.strikeBenefitsTerm} body={define.strikeBenefitsDef} />
          <Topic title={define.ssdiTerm} body={define.ssdiDef} />
          <Topic title={define.veteransBenefitsTerm} body={define.veteransBenefitsDef} />
          <Topic title={define.currentTerm} body={define.currentDef} />
        </ArticleDefinitionSection>
      </Article>
    )
  }
}
