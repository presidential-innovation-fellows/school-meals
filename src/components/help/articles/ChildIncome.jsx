import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import ArticleDefinitionSection from '../ArticleDefinitionSection'
import Topic from '../Topic'
import Household from '../topics/Household'
import RegularCash from '../topics/RegularCash'
import WhatIncome from '../topics/WhatIncome'
import { help, define } from './HelpText'

export default class ChildIncome extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
          <Topic title={help.childIncomeTitle} body={help.childIncomeBody} />
          <Topic title={help.grossTitle} body={help.grossBody} />
          <Topic title={help.netTitle} body={help.netBody} />
          <WhatIncome />
          <Household />
          <Topic title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
        </ArticleFaqSection>
        <ArticleDefinitionSection>
          <Topic title={define.ssiChildrenTerm} body={define.ssiChildrenDef} />
          <Topic title={define.ssSurvivorTerm} body={define.ssSurvivorDef} />
          <Topic title={define.currentTerm} body={define.currentDef} />
          <RegularCash />
          <Topic title={define.pensionBeneficiaryTerm} body={define.pensionBeneficiaryDef} />
          <Topic title={define.annuityChildrenTerm} body={define.annuityChildrenDef} />
          <Topic title={define.trustTerm} body={define.trustDef} />
        </ArticleDefinitionSection>
      </Article>
    )
  }
}
