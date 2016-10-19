import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'

@observer
class SpousalIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.spousal
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: 'spousal',
      label: 'Spousal Income',
      person
    }

    return(
      <IncomeType {...incomeTypeProps}>

        <IncomeSource incomeSources={incomeSources} name="alimony">
          <Tooltipcomp id="alimony" text={tooltiptext.alimony} target="Alimony" />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="childSupport">
          <Tooltipcomp id="childSupport" text={tooltiptext.childSupport} target="Child support" />
        </IncomeSource>
      </IncomeType>
    )
  }
}

SpousalIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default SpousalIncome
