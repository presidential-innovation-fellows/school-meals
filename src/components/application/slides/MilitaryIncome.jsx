import React, { Component, PropTypes } from 'react'
import IncomeType from './IncomeType'
import IncomeTypeDefaultText from './IncomeTypeDefaultText'
import IncomeSource from '../IncomeSource'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltip from '../Tooltip'
import { FormattedMessage } from 'react-intl'

@observer
class MilitaryIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.military
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: 'military',
      person
    }

    return (
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
            <Tooltip id="militaryBasicPay" text={tooltiptext.basicPay}>
              <FormattedMessage
                  id="app.slides.militaryIncome.basicPayTooltip"
                  description="Military basic pay"
                  defaultMessage="Military basic pay"
              />
            </Tooltip>
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
              <span />
              }
          </IncomeSource>

          <IncomeSource incomeSources={incomeSources} name="cashBonus">
            <FormattedMessage
                id="app.slides.militaryIncome.cashBonus"
                description="Military cash bonus"
                defaultMessage="Military {tooltip}"
                values={{
                  tooltip:
                    <Tooltip text={tooltiptext.cashBonus}>
                      <FormattedMessage
                          id="app.slides.militaryIncome.cashBonusTooltip"
                          description="cash bonus"
                          defaultMessage="cash bonus"
                      />
                    </Tooltip>
                }}
            />
          </IncomeSource>

          <IncomeSource incomeSources={incomeSources} name="allowance">
            <FormattedMessage
                id="app.slides.militaryIncome.allowance"
                description="Military allowance income"
                defaultMessage="Military {tooltip} for off-base housing, food, clothing (other than FSSA and MHPI)"
                values={{
                  tooltip:
                    <Tooltip text={tooltiptext.allowances}>
                      <FormattedMessage
                          id="app.slides.militaryIncome.allowanceTooltip"
                          description="allowance"
                          defaultMessage="allowance"
                      />
                    </Tooltip>
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
