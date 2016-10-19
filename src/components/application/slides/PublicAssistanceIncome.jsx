import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'

@observer
class PublicAssistanceIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.publicAssistance
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: "publicAssistance",
      label: "Public Assistance",
      person
    }

    return(
      <IncomeType {...incomeTypeProps}>

        <IncomeSource incomeSources={incomeSources} name="ssi">
          Supplemental Security Income &nbsp;
          <Tooltipcomp id="SSI" text={tooltiptext.SSI} target="(SSI)" />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="stateLocal">
          <Tooltipcomp id="cashAssistance" text={tooltiptext.cashAssistance} target="Cash assistance" />
          &nbsp; from state or local government (including housing subsidies)
        </IncomeSource>
      </IncomeType>
    )
  }
}

PublicAssistanceIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default PublicAssistanceIncome
