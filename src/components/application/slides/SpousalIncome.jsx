import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'
import FormattedMessage from '../FormattedMessage'

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
        <Tooltipcomp text={tooltiptext.alimony}>
           <FormattedMessage
              id="app.slides.spousalIncome.alimony"
              description="Alimony"
              defaultMessage="Alimony"
           />
        </Tooltipcomp>
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="childSupport">
        <Tooltipcomp text={tooltiptext.childSupport}>
           <FormattedMessage
              id="app.slides.spousalIncome.childSupport"
              description="Child support"
              defaultMessage="Child support"
           />
        </Tooltipcomp>
        </IncomeSource>
      </IncomeType>
    )
  }
}

SpousalIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default SpousalIncome
