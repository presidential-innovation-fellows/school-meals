import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Standard from '../TopicStandard'
import WhatInformation from '../topics/WhatInformation'
import Household from '../topics/Household'
import IEG from '../topics/IEG'
import NetSelfEmployment from '../topics/NetSelfEmployment'
import NotTheSame from '../topics/NotTheSame'
import PaperApp from '../topics/PaperApp'
import QualifyHomeless from '../topics/QualifyHomeless'
import QualifyMigrant from '../topics/QualifyMigrant'
import RegularCash from '../topics/RegularCash'
import ReportCombat from '../topics/ReportCombat'
import WhatIncome from '../topics/WhatIncome'

//None

export default class All extends Component {
  render() {
    return (
        <Article>
            <PaperApp />
            <Standard title={help.newAppTitle} body={help.newAppBody} />
            <Standard title={help.childAppTitle} body={help.childAppBody} />
            <Standard title={help.letterTitle} body={help.letterBody} />
            <Standard title={help.applyLaterTitle} body={help.applyLaterBody} />
            <Standard title={help.localProgramTitle} body={help.localProgramBody} />
            <Standard title={help.fosterQualifyTitle} body={help.fosterQualifyBody} />
            <Standard title={help.wicTitle} body={help.wicBody} />
            <Standard title={help.headStartTitle} body={help.headStartBody} />
            <Standard title={help.otherProgramsTitle} body={help.otherProgramsBody} />
            <Standard title={help.usCitizenTitle} body={help.usCitizenBody} />
            <Standard title={help.publicChargeTitle} body={help.publicChargeBody} />
            <Standard title={help.checkedTitle} body={help.checkedBody} />
            <WhatInformation />
            <Household />
            <Standard title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
            <Standard title={help.deployedTitle} body={help.deployedBody} />
            <Standard title={help.permanentTitle} body={help.permanentBody} />
            <Standard title={help.fosterTitle} body={help.fosterBody} />
            <QualifyMigrant />
            <QualifyHomeless />
            <Standard title={help.qualifyRunawayTitle} body={help.qualifyRunawayBody} />
            <WhatIncome />
            <Standard title={help.childIncomeTitle} body={help.childIncomeBody} />
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
            <Standard title={help.noIncomeTitle} body={help.noIncomeBody} />
            <Standard title={help.ssnTitle} body={help.ssnBody} />
            <Standard title={help.contactTitle} body={help.contactBody} />
            <Standard title={help.disagreeTitle} body={help.disagreeBody} />
            <bodyLabels>Definitions</bodyLabels>
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
            <Standard title={define.ssiChildrenTerm} body={define.ssiChildrenDef} />
            <Standard title={define.ssSurvivorTerm} body={define.ssSurvivorDef} />
            <Standard title={define.pensionBeneficiaryTerm} body={define.pensionBeneficiaryDef} />
            <Standard title={define.annuityChildrenTerm} body={define.annuityChildrenDef} />
        </Article>
    )
  }
}
