import React, { Component, PropTypes } from 'react'
import IncomeType from './IncomeType'
import IncomeTypeDefaultText from './IncomeTypeDefaultText'
import IncomeSource from '../IncomeSource'
import BooleanRadio from '../BooleanRadio'
import { observer } from 'mobx-react'
import { ControlLabel } from 'react-bootstrap'
import { organization } from '../../../config'

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
        <div>
          {incomeType.isDeployed ?
           <p>
             Military basic pay made available to the household, cash bonuses and allowances for off-base housing, food or clothing (including BAH) are includable income sources. Do not include combat pay, Family Subsistence Supplemental Allowance, or Military Housing Privatization Initiative.
           </p>
           :
           <p>
             Military basic pay, drill pay, cash bonuses and allowances for off-base housing, food, or clothing (including BAH) count as income for purposes of applying for school meal benefits. Do not include combat pay, Family Subsistence Supplemental Allowance, or Military Housing Privatization Initiative.
           </p>
          }

           <p>
             If your household's current, gross income is higher or lower than usual and does not fairly or accurately represent your household's actual circumstances, see the 'WHAT IF MY INCOME IS NOT ALWAYS THE SAME?' or 'IF I DO NOT QUALIFY RIGHT NOW, MAY I APPLY LATER?' questions on the HELP section. If you have additional questions, contact {organization.name} ({organization.contact.phone} / {organization.contact.email} / {organization.contact.address}), and they will help you figure out your household's annual rate of income based on USDA guidelines.
           </p>

           <IncomeTypeDefaultText person={person} />

           <IncomeSource incomeSources={incomeSources} name="basic">
             Military basic pay (made available to the household)
           </IncomeSource>

           <IncomeSource incomeSources={incomeSources} name="cashBonus">
             Military cash bonus
           </IncomeSource>

           <IncomeSource incomeSources={incomeSources} name="allowance">
             Military allowance for off-base housing (other than privatized housing allowances), food, clothing
           </IncomeSource>
        </div>
      </IncomeType>
    )
  }
}

MilitaryIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default MilitaryIncome
