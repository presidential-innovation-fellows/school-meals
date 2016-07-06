import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import IncomeSource from '../IncomeSource'
import { observer } from 'mobx-react'
import { ControlLabel } from 'react-bootstrap'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class RetirementIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.retirement
    const incomeSources = incomeType.sources

    return(
      <Slide header="Retirement Income"
             headerSmall={person.firstName}
             nextDisabled={!incomeTypeIsValid(incomeType)}>

        <p>
          Does <strong>{person.firstName}</strong> have retirement income from Social Security (including Black Lung Benefits and Railroad Retirement) or private pensions?
        </p>

        <BooleanRadio name="isApplicable" object={incomeType} />

        {incomeType.isApplicable &&
         <div>
           <p>Note: Remember, to report gross income, which is all money earned before deductions, such as income taxes, employee's social security taxes, and insurance premiums.</p>

           <br />

           <IncomeSource incomeSources={incomeSources} name="socialSecurity">
             Social Security (including Black Lung Benefits and Railroad Retirement)
           </IncomeSource>

           <IncomeSource incomeSources={incomeSources} name="privatePension">
             Private pension
           </IncomeSource>
         </div>
        }
      </Slide>
    )
  }
}

RetirementIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default RetirementIncome
