import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import MilitaryIncome from './MilitaryIncome'
import EmploymentIncome from './EmploymentIncome'

@observer
class AdultIncomeSlides extends Component {
  render() {
    const { person } = this.props

    return(
      <div>
        <MilitaryIncome person={person} />
        <EmploymentIncome person={person} />
      </div>
    )
  }
}

AdultIncomeSlides.propTypes = {
  person: PropTypes.object.isRequired
}

export default AdultIncomeSlides
