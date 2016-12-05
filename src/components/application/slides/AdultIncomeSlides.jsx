import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import AdultIncomeOverview from './AdultIncomeOverview'
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

    return (
      <div>
        <AdultIncomeOverview person={person} />

        {person.incomeTypes.military.isApplicable &&
        <MilitaryIncome person={person} />
        }
        {person.incomeTypes.employment.isApplicable &&
        <EmploymentIncome person={person} />
        }
        {person.incomeTypes.publicAssistance.isApplicable &&
        <PublicAssistanceIncome person={person} />
        }
        {person.incomeTypes.spousal.isApplicable &&
        <SpousalIncome person={person} />
        }
        {person.incomeTypes.unemployment.isApplicable &&
        <UnemploymentIncome person={person} />
        }
        {person.incomeTypes.retirement.isApplicable &&
        <RetirementIncome person={person} />
        }
        {person.incomeTypes.other.isApplicable &&
        <OtherIncome person={person} />
        }
      </div>
    )
  }
}

AdultIncomeSlides.propTypes = {
  person: PropTypes.object.isRequired
}

export default AdultIncomeSlides
