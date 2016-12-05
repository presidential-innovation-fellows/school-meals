import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import ArticleDefinitionSection from '../ArticleDefinitionSection'
import Topic from '../Topic'
import { define, help } from './HelpText'
import WhatInformation from '../topics/WhatInformation'
import Household from '../topics/Household'
import Ieg from '../topics/Ieg'
import NetSelfEmployment from '../topics/NetSelfEmployment'
import NotTheSame from '../topics/NotTheSame'
import PaperApp from '../topics/PaperApp'
import QualifyHomeless from '../topics/QualifyHomeless'
import QualifyMigrant from '../topics/QualifyMigrant'
import RegularCash from '../topics/RegularCash'
import ReportCombat from '../topics/ReportCombat'
import WhatIncome from '../topics/WhatIncome'


class All extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection showLabel={this.props.showLabels}>
          <PaperApp />
          <Topic title={help.newAppTitle} body={help.newAppBody} />
          <Topic title={help.childAppTitle} body={help.childAppBody} />
          <Topic title={help.letterTitle} body={help.letterBody} />
          <Topic title={help.applyLaterTitle} body={help.applyLaterBody} />
          <Topic title={help.localProgramTitle} body={help.localProgramBody} />
          <Topic title={help.fosterQualifyTitle} body={help.fosterQualifyBody} />
          <Topic title={help.wicTitle} body={help.wicBody} />
          <Topic title={help.headStartTitle} body={help.headStartBody} />
          <Topic title={help.otherProgramsTitle} body={help.otherProgramsBody} />
          <Topic title={help.usCitizenTitle} body={help.usCitizenBody} />
          <Topic title={help.publicChargeTitle} body={help.publicChargeBody} />
          <Topic title={help.checkedTitle} body={help.checkedBody} />
          <WhatInformation />
          <Household />
          <Topic title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
          <Topic title={help.deployedTitle} body={help.deployedBody} />
          <Topic title={help.permanentTitle} body={help.permanentBody} />
          <Topic title={help.fosterTitle} body={help.fosterBody} />
          <QualifyMigrant />
          <QualifyHomeless />
          <Topic title={help.qualifyRunawayTitle} body={help.qualifyRunawayBody} />
          <WhatIncome />
          <Topic title={help.childIncomeTitle} body={help.childIncomeBody} />
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
          <Topic title={help.ssnTitle} body={help.ssnBody} />
          <Topic title={help.contactTitle} body={help.contactBody} />
          <Topic title={help.disagreeTitle} body={help.disagreeBody} />

        </ArticleFaqSection>
        <ArticleDefinitionSection showLabel={this.props.showLabels}>

          <Ieg />
          <Topic title={define.mckinneyTerm} body={define.mckinneyDef} />
          <Topic title={define.mepTerm} body={define.mepDef} />
          <Topic title={define.runawayHomelessActTerm} body={define.runawayHomelessActDef} />
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
          <Topic title={define.ssiChildrenTerm} body={define.ssiChildrenDef} />
          <Topic title={define.ssSurvivorTerm} body={define.ssSurvivorDef} />
          <Topic title={define.pensionBeneficiaryTerm} body={define.pensionBeneficiaryDef} />
          <Topic title={define.annuityChildrenTerm} body={define.annuityChildrenDef} />
        </ArticleDefinitionSection>
      </Article>
    )
  }
}

All.propTypes = {
  showLabels: PropTypes.bool
}

All.defaultProps = {
  showLabels: true
}

export default All
