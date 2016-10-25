import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'
import Household from '../topics/Household'
import IEG from '../topics/IEG'
import NetSelfEmployment from '../topics/NetSelfEmployment'
import QualifyHomeless from '../topics/QualifyHomeless'
import QualifyMigrant from '../topics/QualifyMigrant'
import RegularCash from '../topics/RegularCash'
import ReportCombat from '../topics/ReportCombat'
import WhatIncome from '../topics/WhatIncome'

//F15, F24, F40, F26-39, F16, F20, F22-23, F5, F41, F11-13, F42, F10, F43, D1-23

export default class Summary extends Component {
  render() {
    return (
        <Article>
            <Household />
            <WhatIncome />
            <Standard title={help.noIncomeTitle} body={help.noIncomeBody} />
            <Standard title={help.grossTitle} body={help.grossBody} />
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
            <Standard title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
            <QualifyMigrant />
            <QualifyHomeless />
            <Standard title={help.qualifyRunawayTitle} body={help.qualifyRunawayBody} />
            <Standard title={help.applyLaterTitle} body={help.applyLaterBody} />
            <Standard title={help.ssnTitle} body={help.ssnBody} />
            <Standard title={help.usCitizenTitle} body={help.usCitizenBody} />
            <Standard title={help.publicChargeTitle} body={help.publicChargeBody} />
            <Standard title={help.checkedTitle} body={help.checkedBodY} />
            <Standard title={help.contactTitle} body={help.contactBody} />
            <Standard title={help.otherProgramsTitle} body={help.otherProgramsBody} />       
            <Standard title={help.disagreeTitle} body={help.disagreeBody} />
            <IEG />
            <Standard title={define.mckinneyTerm} body={define.mckinneyDef} />
            <Standard title={define.mepTerm} body={define.mepDef} />
            <Standard title={define.runawayHomelessActTerm} body={define.runawayHomelessActDef} />
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
        </Article>
    )
  }
}
