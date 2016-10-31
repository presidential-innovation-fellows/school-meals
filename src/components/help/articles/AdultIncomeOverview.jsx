import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'
import NotTheSame from '../topics/NotTheSame'
import ReportCombat from '../topics/ReportCombat'
import Household from '../topics/Household'
import RegularCash from '../topics/RegularCash'
import NetSelfEmployment from '../topics/NetSelfEmployment'

//F24, F26-F40, F13, F15, D5-D23

export default class AdultIncomeOverview extends Component {
  render() {
    return (
      <Article>
            <Standard title={help.childIncomeTitle} body={help.childIncomeBody} />
            <Standard title={help.netTitle} body={help.netBody} />
            <NotTheSame />
            <Standard title={help.militaryTitle} body={help.militaryBody} />
            <ReportCombat />
            <Standard title={help.deipTitle} body={help.deipBody} />
            <Standard title={help.fssaTitle} body={help.fssaBody} />
            <Standard title={help.earningsDifferencesTitle} body={help.earningsDifferencesBody} />
            <Standard title={help.selfEmployedTitle} body={help.selfEmployedBody} />
            <Standard title={help.wagesSelfemploymentTitle} body={help.wagesSelfemploymentBody} />
            <Standard title={help.govProgramTitle} body={help.govProgramBody} />
            <Standard title={help.rentalTitle} body={help.rentalBody} />
            <Standard title={help.interestTitle} body={help.interestBody} />
            <Standard title={help.seasonalTitle} body={help.seasonalBody} />
            <Standard title={help.noIncomeTitle} body={help.noIncomeBody} />
            <Standard title={help.ssnTitle} body={help.ssnBody} />
 		<Standard title={help.checkedTitle} body={help.checkedBody} />
            <Household />
            <bodyLabels>Definitions</bodyLabels>
            <Standard title={define.currentTerm} body={define.currentDef} />
            <Standard title={define.cashBonusTerm} body={define.cashBonusDef} />
            <NetSelfEmployment />
            <Standard title={define.ssiTerm} body={define.ssiDef} />
            <Standard title={define.cashAssistanceTerm} body={define.cashAssistanceDef} />
            <Standard title={define.alimonyTerm} body={define.alimonyDef} />
            <Standard title={define.childSupportTerm} body={define.childSupportDef} />
            <Standard title={define.unemploymentTerm} body={define.unemploymentDef} />
            <Standard title={define.workersCompTerm} body={define.workersCompDef} />
            <Standard title={define.strikeBenefitsTerm} body={define.strikeBenefitsDef} />
            <Standard title={define.ssdiTerm} body={define.ssdiDef} />
            <Standard title={define.veteransBenefitsTerm} body={define.veteransBenefitsDef} />
            <Standard title={define.socialSecurityTerm} body={define.socialSecurityDef} />
            <Standard title={define.blackLungTerm} body={define.blackLungDef} />
            <Standard title={define.railroadRetirementTerm} body={define.railroadRetirementDef} />
            <RegularCash />
            <Standard title={define.pensionTerm} body={define.pensionDef} />
            <Standard title={define.annuityTerm} body={define.annuityDef} />
            <Standard title={define.trustTerm} body={define.trustDef} />
            <Standard title={define.ssiChildrenTerm} body={define.ssiChildrenDef} />
            <Standard title={define.ssSurvivorTerm} body={define.ssSurvivorDef} />
            <Standard title={define.pensionBeneficiaryTerm} body={define.pensionBeneficiaryDef} />
            <Standard title={define.annuityChildrenTerm} body={define.annuityChildrenDef} />
      </Article>
    )
  }
}
