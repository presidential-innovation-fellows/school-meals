import React, { Component } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import ArticleDefinitionSection from '../ArticleDefinitionSection'
import Topic from '../Topic'
import { define, help } from './HelpText'
import NotTheSame from '../topics/NotTheSame'
import WhatIncome from '../topics/WhatIncome'


// F28, F26, F27, F24, D17-19, D5

export default class RetirementIncome extends Component {
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
          <Topic title={define.socialSecurityTerm} body={define.socialSecurityDef} />
          <Topic title={define.blackLungTerm} body={define.blackLungDef} />
          <Topic title={define.railroadRetirementTerm} body={define.railroadRetirementDef} />
          <Topic title={define.currentTerm} body={define.currentDef} />
        </ArticleDefinitionSection>
      </Article>
    )
  }
}
