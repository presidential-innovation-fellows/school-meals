import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'

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
            <Tooltipcomp id="socialSecurity" text={tooltiptext.socialSecurity} target="Social Security" />
          &nbsp; (including 
            <Tooltipcomp id="blackLung" text={tooltiptext.blackLung} target="Black Lung benefits" />
          &nbsp; and &nbsp;
            <Tooltipcomp id="railroad" text={tooltiptext.railroad} target="Railroad Retirement" />
          &nbsp; )
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="privatePension">
          <Tooltipcomp id="pension" text={tooltiptext.pension} target="Pension" />
        </IncomeSource>
      </IncomeType>
    )
  }
}

RetirementIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default RetirementIncome
