import React, { Component, PropTypes } from 'react'
import IncomeType from './IncomeType'
import IncomeTypeDefaultText from './IncomeTypeDefaultText'
import IncomeSource from '../IncomeSource'
import BooleanRadio from '../BooleanRadio'
import { observer } from 'mobx-react'
import { organization } from '../../../config'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'

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
             Military basic pay, drill pay, and cash bonuses made available to the household, as well as allowances for off-base housing, food or clothing (including BAH) are includable income sources. Do not include combat pay, Family Subsistence Supplemental Allowance (FSSA), or Military Housing Privatization Initiative (MHPI).
           </p>
           :
           <p>
             Military basic pay, drill pay, cash bonuses and allowances for off-base housing, food, or clothing (including BAH) count as income for purposes of applying for school meal benefits. Do not include combat pay, Family Subsistence Supplemental Allowance (FSSA), or Military Housing Privatization Initiative (MHPI).
           </p>
          }

           <IncomeTypeDefaultText person={person} />

           <IncomeSource incomeSources={incomeSources} name="basic">
             <Tooltipcomp id="militaryBasicPay" text={tooltiptext.basicPay} target="Military basic pay" />
             &nbsp; (made available to the household)
           </IncomeSource>

           <IncomeSource incomeSources={incomeSources} name="cashBonus">
             Military &nbsp;
             <Tooltipcomp id="cashBonus" text={tooltiptext.cashBonus} target="cash bonus" />
           </IncomeSource>

           <IncomeSource incomeSources={incomeSources} name="allowance">
             Military &nbsp;
             <Tooltipcomp id="allowance" text={tooltiptext.allowances} target="allowance" />
             &nbsp; for off-base housing, food, clothing (other than FSSA and MHPI)
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
