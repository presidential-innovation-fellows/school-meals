import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import IncomeSource from '../IncomeSource'
import { observer } from 'mobx-react'
import { ControlLabel, Well } from 'react-bootstrap'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class UnemploymentIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.unemployment
    const incomeSources = incomeType.sources

    return(
      <Slide header={person.firstName}
             headerSmall="Unemployment Income"
             nextDisabled={!incomeTypeIsValid(incomeType)}>
        <Well>
          NOTE: Remember, to report gross income, which is all money earned before deductions, such as income taxes, employee's social security taxes, and insurance premiums.
        </Well>

        <IncomeSource incomeSources={incomeSources} name="unemployment">
          Unemployment benefits
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="workersComp">
          Worker's compensation
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="strike">
          Strike benefits
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="ssdi">
          Social Security Disability Insurance (SSDI)
        </IncomeSource>
      </Slide>
    )
  }
}

UnemploymentIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default UnemploymentIncome
