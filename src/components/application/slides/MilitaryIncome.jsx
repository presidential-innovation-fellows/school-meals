import React, { Component, PropTypes } from 'react'
import IncomeType from './IncomeType'
import IncomeTypeDefaultText from './IncomeTypeDefaultText'
import IncomeSource from '../IncomeSource'
import BooleanRadio from '../BooleanRadio'
import { observer } from 'mobx-react'
import { organization } from '../../../config'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'
import FormattedMessage from '../FormattedMessage'

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
           <FormattedMessage
              id="app.slides.militaryIncome.basicPay"
              description="Military Pay info"
              defaultMessage="Military basic pay, drill pay, and cash bonuses made available to the household, as well as allowances for off-base housing, food or clothing (including BAH) are includable income sources. Do not include combat pay, Family Subsistence Supplemental Allowance (FSSA), or Military Housing Privatization Initiative (MHPI)."
           />
           </p>
           :
           <p>
           <FormattedMessage
              id="app.slides.militaryIncome.basicPayMore"
              description="Military Pay info more"
              defaultMessage="Military basic pay, drill pay, cash bonuses and allowances for off-base housing, food, or clothing (including BAH) count as income for purposes of applying for school meal benefits. Do not include combat pay, Family Subsistence Supplemental Allowance (FSSA), or Military Housing Privatization Initiative (MHPI)."
           />
           </p>
          }

           <IncomeTypeDefaultText person={person} />

           <IncomeSource incomeSources={incomeSources} name="basic">
             <Tooltipcomp id="militaryBasicPay" text={tooltiptext.basicPay} target="Military basic pay" />
             &nbsp; 
              {incomeType.isDeployed ?
                <span>
                <FormattedMessage
                  id="app.slides.militaryIncome.madeAvailable"
                  description="made available"
                  defaultMessage="(made available to the household)"
                 />
                </span>
                :
                <span>
                </span>
              }
           </IncomeSource>

           <IncomeSource incomeSources={incomeSources} name="cashBonus">
           <FormattedMessage
              id="app.slides.beforeYouBegin.householdPrograms"
              description="Hist that you can skip most of application with a household program."
              defaultMessage="Military &nbsp;{tooltip}"
              values={{
                tooltip:
                        <Tooltipcomp text={tooltiptext.cashBonus}>
                          <FormattedMessage
                            id="app.slides.militaryIncome.cashBonus"
                            description="cash bonus"
                            defaultMessage="cash bonus"
                          />
                        </Tooltipcomp>
              }}
          />
           </IncomeSource>

           <IncomeSource incomeSources={incomeSources} name="allowance">
           <FormattedMessage
              id="app.slides.beforeYouBegin.householdPrograms"
              description="Hist that you can skip most of application with a household program."
              defaultMessage="Military &nbsp;{tooltip}&nbsp; for off-base housing, food, clothing (other than FSSA and MHPI)"
              values={{
                tooltip:
                        <Tooltipcomp text={tooltiptext.allowances}>
                          <FormattedMessage
                            id="app.slides.militaryIncome.allowances"
                            description="allowance"
                            defaultMessage="allowance"
                          />
                        </Tooltipcomp>
              }}
          />
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
