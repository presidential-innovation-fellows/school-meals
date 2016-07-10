import React, { Component, PropTypes } from 'react'
import IncomeType from './IncomeType'
import IncomeTypeDefaultText from './IncomeTypeDefaultText'
import IncomeSource from '../IncomeSource'
import BooleanRadio from '../BooleanRadio'
import { observer } from 'mobx-react'
import { ControlLabel } from 'react-bootstrap'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class MilitaryIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.military
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: "military",
      label: "Military Income",
      person
    }

    return(
      <IncomeType {...incomeTypeProps} showDefaultText={false}>
        <ControlLabel>
          Is {person.firstName} currently deployed?
        </ControlLabel>
        <BooleanRadio name="isDeployed" object={incomeType} />

        {incomeType.isDeployed != null &&
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

            <IncomeTypeDefaultText person={person} />

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
      </IncomeType>
    )
  }
}

MilitaryIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default MilitaryIncome
