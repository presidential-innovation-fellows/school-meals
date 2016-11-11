import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'
import FormattedMessage from '../FormattedMessage'

@observer
class RetirementIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.retirement
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: "retirement",
      label: "Retirement Income",
      person
    }

    return(
      <IncomeType {...incomeTypeProps}>

        <IncomeSource incomeSources={incomeSources} name="socialSecurity">
        <FormattedMessage
              id="app.slides.retirementIncome.incomeList"
              description="List of retirement income"
              defaultMessage="{tooltip}&nbsp; (including survivor benefits, &nbsp;{tooltip2}&nbsp;, and &nbsp;{tooltip3}&nbsp; )"
              values={{
                tooltip:
                        <Tooltipcomp text={tooltiptext.socialSecurity}>
                          <FormattedMessage
                            id="app.slides.retirementIncome.socialSecurity"
                            description="Social Security"
                            defaultMessage="Social Security"
                          />
                        </Tooltipcomp>,
                tooltip2:
                        <Tooltipcomp text={tooltiptext.blackLung}>
                          <FormattedMessage
                            id="app.slides.retirementIncome.blackLung"
                            description="Black Lung benefits"
                            defaultMessage="Black Lung benefits"
                          />
                        </Tooltipcomp>,
                tooltip3:
                        <Tooltipcomp text={tooltiptext.railroad}>
                          <FormattedMessage
                            id="app.slides.retirementIncome.railroad"
                            description="Railroad Retirement"
                            defaultMessage="Railroad Retirement"
                          />
                        </Tooltipcomp>
              }}
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="privatePension">
        <Tooltipcomp text={tooltiptext.pension}>
           <FormattedMessage
              id="app.slides.retirementIncome.pension"
              description="Pension"
              defaultMessage="Pension"
           />
        </Tooltipcomp>
        </IncomeSource>
      </IncomeType>
    )
  }
}

RetirementIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default RetirementIncome
