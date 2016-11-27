import React, { Component } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import ArticleDefinitionSection from '../ArticleDefinitionSection'
import Topic from '../Topic'
import { define, help } from './HelpText'
import NotTheSame from '../topics/NotTheSame'
import WhatIncome from '../topics/WhatIncome'

// F36, F28, F26-27, F24, D8-9, D5

export default class PublicAssistanceIncome extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
          <Topic title={help.govProgramTitle} body={help.govProgramBody} />
          <NotTheSame />
          <Topic title={help.grossTitle} body={help.grossBody} />
          <Topic title={help.netTitle} body={help.netBody} />
          <WhatIncome />
        </ArticleFaqSection>
        <ArticleDefinitionSection>
          <Topic title={define.ssiTerm} body={define.ssiDef} />
          <Topic title={define.cashAssistanceTerm} body={define.cashAssistanceDef} />
          <Topic title={define.currentTerm} body={define.currentDef} />
        </ArticleDefinitionSection>
      </Article>
    )
  }
}
