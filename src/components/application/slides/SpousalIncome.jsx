import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'

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
          Alimony
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="childSupport">
          Child support
        </IncomeSource>
      </IncomeType>
    )
  }
}

SpousalIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default SpousalIncome
