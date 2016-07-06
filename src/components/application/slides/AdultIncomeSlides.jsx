import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import MilitaryIncome from './MilitaryIncome'
import EmploymentIncome from './EmploymentIncome'
import PublicAssistanceIncome from './PublicAssistanceIncome'
import SpousalIncome from './SpousalIncome'
import UnemploymentIncome from './UnemploymentIncome'
import RetirementIncome from './RetirementIncome'
import OtherIncome from './OtherIncome'

@observer
class AdultIncomeSlides extends Component {
  render() {
    const { person } = this.props

    return(
      <div>
        <MilitaryIncome person={person} />
        <EmploymentIncome person={person} />
        <PublicAssistanceIncome person={person} />
        <SpousalIncome person={person} />
        <UnemploymentIncome person={person} />
        <RetirementIncome person={person} />
        <OtherIncome person={person} />
      </div>
    )
  }
}

AdultIncomeSlides.propTypes = {
  person: PropTypes.object.isRequired
}

export default AdultIncomeSlides
