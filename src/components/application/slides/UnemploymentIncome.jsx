import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import IncomeSource from '../IncomeSource'
import { observer } from 'mobx-react'
import { ControlLabel } from 'react-bootstrap'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class UnemploymentIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.unemployment
    const incomeSources = incomeType.sources

    return(
      <Slide header="Unemployment Income"
             headerSmall={person.firstName}
             nextDisabled={!incomeTypeIsValid(incomeType)}>

        <p>
          Does <strong>{person.firstName}</strong> have income from unemployment benefits, worker's compensation, strike benefits, or Social Security Disability Insurance (SSDI)?
        </p>

        <BooleanRadio name="isApplicable" object={incomeType} />

        {incomeType.isApplicable &&
         <div>
           <p>Note: Remember, to report gross income, which is all money earned before deductions, such as income taxes, employee's social security taxes, and insurance premiums.</p>

           <br />

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
         </div>
        }
      </Slide>
    )
  }
}

UnemploymentIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default UnemploymentIncome
