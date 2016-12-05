import React, { Component } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import ArticleDefinitionSection from '../ArticleDefinitionSection'
import Topic from '../Topic'
import { define, help } from './HelpText'
import NotTheSame from '../topics/NotTheSame'
import ReportCombat from '../topics/ReportCombat'
import Household from '../topics/Household'
import RegularCash from '../topics/RegularCash'
import NetSelfEmployment from '../topics/NetSelfEmployment'
import WhatIncome from '../topics/WhatIncome'

// F24, F26-F40, F13, F15, D5-D23

export default class AdultIncomeOverview extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
          <WhatIncome />
          <Topic title={help.grossTitle} body={help.grossBody} />
          <Topic title={help.netTitle} body={help.netBody} />
          <NotTheSame />
          <Topic title={help.militaryTitle} body={help.militaryBody} />
          <ReportCombat />
          <Topic title={help.deipTitle} body={help.deipBody} />
          <Topic title={help.fssaTitle} body={help.fssaBody} />
          <Topic title={help.earningsDifferencesTitle} body={help.earningsDifferencesBody} />
          <Topic title={help.selfEmployedTitle} body={help.selfEmployedBody} />
          <Topic title={help.wagesSelfemploymentTitle} body={help.wagesSelfemploymentBody} />
          <Topic title={help.govProgramTitle} body={help.govProgramBody} />
          <Topic title={help.rentalTitle} body={help.rentalBody} />
          <Topic title={help.interestTitle} body={help.interestBody} />
          <Topic title={help.seasonalTitle} body={help.seasonalBody} />
          <Topic title={help.noIncomeTitle} body={help.noIncomeBody} />
          <Topic title={help.checkedTitle} body={help.checkedBody} />
          <Household />
        </ArticleFaqSection>
        <ArticleDefinitionSection>
          <Topic title={define.currentTerm} body={define.currentDef} />
          <Topic title={define.cashBonusTerm} body={define.cashBonusDef} />
          <NetSelfEmployment />
          <Topic title={define.ssiTerm} body={define.ssiDef} />
          <Topic title={define.cashAssistanceTerm} body={define.cashAssistanceDef} />
          <Topic title={define.alimonyTerm} body={define.alimonyDef} />
          <Topic title={define.childSupportTerm} body={define.childSupportDef} />
          <Topic title={define.unemploymentTerm} body={define.unemploymentDef} />
          <Topic title={define.workersCompTerm} body={define.workersCompDef} />
          <Topic title={define.strikeBenefitsTerm} body={define.strikeBenefitsDef} />
          <Topic title={define.ssdiTerm} body={define.ssdiDef} />
          <Topic title={define.veteransBenefitsTerm} body={define.veteransBenefitsDef} />
          <Topic title={define.socialSecurityTerm} body={define.socialSecurityDef} />
          <Topic title={define.blackLungTerm} body={define.blackLungDef} />
          <Topic title={define.railroadRetirementTerm} body={define.railroadRetirementDef} />
          <RegularCash />
          <Topic title={define.pensionTerm} body={define.pensionDef} />
          <Topic title={define.annuityTerm} body={define.annuityDef} />
          <Topic title={define.trustTerm} body={define.trustDef} />
        </ArticleDefinitionSection>
      </Article>
    )
  }
}
