import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import IncomeSource from '../IncomeSource'
import { observer } from 'mobx-react'
import { ControlLabel, Well } from 'react-bootstrap'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class MilitaryIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.military
    const incomeSources = incomeType.sources

    return(
      <Slide header="Military Income"
             headerSmall={person.firstName}
             nextDisabled={!incomeTypeIsValid(incomeType, ['isDeployed'])}>

        <ControlLabel>Is {person.firstName} in the military?</ControlLabel>
        <BooleanRadio name="isApplicable" object={incomeType} />

        {incomeType.isApplicable &&
         <div>
           <ControlLabel>
             Is {person.firstName} currently deployed?
           </ControlLabel>
           <BooleanRadio name="isDeployed" object={incomeType} />
         </div>
        }

        {incomeType.isApplicable && incomeType.isDeployed != null &&
         <div>
           {incomeType.isDeployed ?
            <p>
              Military basic pay, drill pay, cash bonuses and allowances for off-base housing, food or clothing are includable income sources. Do not include combat pay, Family Substance Supplemental Allowance, or privatized housing allowances.
            </p>
            :
            <p>
              Military basic pay made available to the household, cash bonuses and allowances for off-base housing, food or clothing are includable income sources. Do not include combat pay, Family Substance Supplemental Allowance, or privatized housing allowances.
            </p>
           }
            <p>
              Does <strong>{person.firstName}</strong> have earning from the following sources?
            </p>

            <Well>
              NOTE: Remember, to report gross income, which is all money earned before deductions, such as income taxes, employee's social security taxes, and insurance premiums.
            </Well>

            <IncomeSource incomeSources={incomeSources} name="basic">
              {incomeType.isDeployed ?
               'Military basic pay/drill pay' :
               'Military basic pay (made available to the household)'}
            </IncomeSource>

            <IncomeSource incomeSources={incomeSources} name="cashBonus">
              Military cash bonus
            </IncomeSource>

            <IncomeSource incomeSources={incomeSources} name="allowance">
              Military allowance for off-base housing (other than privatized housing allowances), food, clothing
            </IncomeSource>
         </div>
        }
      </Slide>
    )
  }
}

MilitaryIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default MilitaryIncome
