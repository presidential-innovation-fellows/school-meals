import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'

@observer
class UnemploymentIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.unemployment
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: "unemployment",
      label: "Unemployment Income",
      person
    }

    return(
      <IncomeType {...incomeTypeProps}>

        <IncomeSource incomeSources={incomeSources} name="unemployment">
          <Tooltipcomp id="unemployment" text={tooltiptext.unemployment} target="Unemployment benefits" />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="workersComp">
          <Tooltipcomp id="workersComp" text={tooltiptext.workersComp} target="Worker’s compensation" />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="strike">
          <Tooltipcomp id="strikeBenefits" text={tooltiptext.strikeBenefits} target="Strike benefits" />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="ssdi">
          Social Security Disability Insurance &nbsp;
          <Tooltipcomp id="SSDI" text={tooltiptext.SSDI} target="(SSDI)" />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="veteran">
          <Tooltipcomp id="veteranBenefits" text={tooltiptext.veteranBenefits} target="Veteran’s benefits" />
        </IncomeSource>
      </IncomeType>
    )
  }
}

UnemploymentIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default UnemploymentIncome
