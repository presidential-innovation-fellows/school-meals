import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltip from '../Tooltip'
import { FormattedMessage } from 'react-intl'

@observer
class RetirementIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.retirement
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: 'retirement',
      person
    }

    return (
      <IncomeType {...incomeTypeProps}>

        <IncomeSource incomeSources={incomeSources} name="socialSecurity">
          <FormattedMessage
              id="app.slides.retirementIncome.incomeList"
              description="List of retirement income"
              defaultMessage="{tooltip} (including survivor benefits, {tooltip2}, and {tooltip3})"
              values={{
                tooltip:
                  <Tooltip text={tooltiptext.socialSecurity}>
                    <FormattedMessage
                        id="app.slides.retirementIncome.socialSecurity"
                        description="Social Security"
                        defaultMessage="Social Security"
                    />
                  </Tooltip>,
                tooltip2:
                  <Tooltip text={tooltiptext.blackLung}>
                    <FormattedMessage
                        id="app.slides.retirementIncome.blackLung"
                        description="Black Lung benefits"
                        defaultMessage="Black Lung benefits"
                    />
                  </Tooltip>,
                tooltip3:
                  <Tooltip text={tooltiptext.railroad}>
                    <FormattedMessage
                        id="app.slides.retirementIncome.railroad"
                        description="Railroad Retirement"
                        defaultMessage="Railroad Retirement"
                    />
                  </Tooltip>
              }}
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="privatePension">
          <Tooltip text={tooltiptext.pension}>
            <FormattedMessage
                id="app.slides.retirementIncome.pension"
                description="Pension"
                defaultMessage="Pension"
            />
          </Tooltip>
        </IncomeSource>
      </IncomeType>
    )
  }
}

RetirementIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default RetirementIncome
