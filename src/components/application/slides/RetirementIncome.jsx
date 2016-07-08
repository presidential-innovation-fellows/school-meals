import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import IncomeSource from '../IncomeSource'
import { observer } from 'mobx-react'
import { ControlLabel, Well } from 'react-bootstrap'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class RetirementIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.retirement
    const incomeSources = incomeType.sources

    return(
      <Slide header={person.firstName}
             headerSmall="Retirement Income"
             nextDisabled={!incomeTypeIsValid(incomeType)}>
        <Well>
          NOTE: Remember, to report gross income, which is all money earned before deductions, such as income taxes, employee's social security taxes, and insurance premiums.
        </Well>

        <IncomeSource incomeSources={incomeSources} name="socialSecurity">
          Social Security (including Black Lung Benefits and Railroad Retirement)
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="privatePension">
          Private pension
        </IncomeSource>
      </Slide>
    )
  }
}

RetirementIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default RetirementIncome
