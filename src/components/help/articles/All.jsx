import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'

import Welcome from './Welcome'
import BeforeYouBegin from './BeforeYouBegin'
import Attestation from './Attestation'
import AssistancePrograms from './AssistancePrograms'
import OtherPrograms from './OtherPrograms'
import OtherChildren from './OtherChildren'
import ChildIncome from './ChildIncome'
import Adults from './Adults'
import AdultIncomeOverview from './AdultIncomeOverview'
import MilitaryIncome from './MilitaryIncome'
import EmploymentIncome from './EmploymentIncome'
import PublicAssistanceIncome from './PublicAssistanceIncome'
import SpousalIncome from './SpousalIncome'
import UnemploymentIncome from './UnemploymentIncome'
import RetirementIncome from './RetirementIncome'
import OtherIncome from './OtherIncome'
import Signature from './Signature'

export default class All extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <BeforeYouBegin />
        <Attestation />
        <AssistancePrograms />
        <OtherPrograms />
        <OtherChildren />
        <ChildIncome />
        <Adults />
        <AdultIncomeOverview />
        <MilitaryIncome />
        <EmploymentIncome />
        <PublicAssistanceIncome />
        <SpousalIncome />
        <UnemploymentIncome />
        <RetirementIncome />
        <OtherIncome />
        <Signature />
      </div>
    )
  }
}
