import React, { Component, PropTypes } from 'react'

import Welcome from './articles/Welcome'
import BeforeYouBegin from './articles/BeforeYouBegin'
import Attestation from './articles/Attestation'
import Students from './articles/Students'
import AssistancePrograms from './articles/AssistancePrograms'
import OtherPrograms from './articles/OtherPrograms'
import OtherChildren from './articles/OtherChildren'
import ChildIncome from './articles/ChildIncome'
import Adults from './articles/Adults'
import AdultIncomeOverview from './articles/AdultIncomeOverview'
import MilitaryIncome from './articles/MilitaryIncome'
import EmploymentIncome from './articles/EmploymentIncome'
import PublicAssistanceIncome from './articles/PublicAssistanceIncome'
import SpousalIncome from './articles/SpousalIncome'
import UnemploymentIncome from './articles/UnemploymentIncome'
import RetirementIncome from './articles/RetirementIncome'
import OtherIncome from './articles/OtherIncome'
import Signature from './articles/Signature'
import Foster from './articles/Foster'
import Summary from './articles/Summary'
import ContactInfo from './articles/ContactInfo'
import ThankYou from './articles/ThankYou'
import LegalStatements from './articles/LegalStatements'
import IncomeElection from './articles/IncomeElection'
import None from './articles/None'
import All from './articles/All'

class SlideTopics extends Component {
  render() {
    switch (this.props.article) {
      case 'welcome': return <Welcome />
      case 'before-you-begin': return <BeforeYouBegin />
      case 'attestation': return <Attestation />
      case 'students': return <Students />
      case 'assistance-programs': return <AssistancePrograms />
      case 'foster': return <Foster />
      case 'other-programs': return <OtherPrograms />
      case 'income-election': return <IncomeElection />
      case 'other-children': return <OtherChildren />
      case 'child-income': return <ChildIncome />
      case 'child': return <ChildIncome />
      case 'adults': return <Adults />
      case 'adult-income-overview': return <AdultIncomeOverview />
      case 'military-income': return <MilitaryIncome />
      case 'employment-income': return <EmploymentIncome />
      case 'publicAssistance-income': return <PublicAssistanceIncome />
      case 'spousal-income': return <SpousalIncome />
      case 'unemployment-income': return <UnemploymentIncome />
      case 'retirement-income': return <RetirementIncome />
      case 'other-income': return <OtherIncome />
      case 'ssn': return <Signature />
      case 'contact': return <ContactInfo />
      case 'optional': return <None />
      case 'legal-statements': return <LegalStatements />
      case 'summary': return <Summary />
      case 'thank-you': return <ThankYou />
      default: return <All />
    }
  }
}

SlideTopics.propTypes = {
  article: PropTypes.string.isRequired
}

export default SlideTopics
