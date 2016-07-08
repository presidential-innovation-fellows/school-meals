import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import IncomeSource from '../IncomeSource'
import { observer } from 'mobx-react'
import { ControlLabel, Well } from 'react-bootstrap'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class EmploymentIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.employment
    const incomeSources = incomeType.sources

    return(
      <Slide header="Employment Income"
             headerSmall={person.firstName}
             nextDisabled={!incomeTypeIsValid(incomeType)}>

        <p>
          Does <strong>{person.firstName}</strong> have earnings from work including salary, wages, tips, commissions, cash bonuses or net income from self-employment{person.incomeTypes.military.isApplicable && ', not including earnings from the military that were already reported'}?
        </p>

        <BooleanRadio name="isApplicable" object={incomeType} />

        {incomeType.isApplicable &&
         <div>
           <Well>
             NOTE: Remember, to report gross income, which is all money earned before deductions, such as income taxes, employee's social security taxes, and insurance premiums.
           </Well>

           <IncomeSource incomeSources={incomeSources} name="salary">
             Salary
           </IncomeSource>

           <IncomeSource incomeSources={incomeSources} name="wages">
             Wages
           </IncomeSource>

           <IncomeSource incomeSources={incomeSources} name="tips">
             Tips
           </IncomeSource>

           <IncomeSource incomeSources={incomeSources} name="commission">
             Commission
           </IncomeSource>

           <IncomeSource incomeSources={incomeSources} name="cashBonus">
             Cash bonus
           </IncomeSource>

           <IncomeSource incomeSources={incomeSources} name="selfEmployment">
             Net income from self-employment
           </IncomeSource>
         </div>
        }
      </Slide>
    )
  }
}

EmploymentIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default EmploymentIncome
