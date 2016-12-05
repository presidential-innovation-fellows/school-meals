import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltip from '../Tooltip'
import { FormattedMessage } from 'react-intl'

@observer
class SpousalIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.spousal
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: 'spousal',
      person
    }

    return (
      <IncomeType {...incomeTypeProps}>

        <IncomeSource incomeSources={incomeSources} name="alimony">
          <Tooltip text={tooltiptext.alimony}>
            <FormattedMessage
                id="app.slides.spousalIncome.alimony"
                description="Alimony"
                defaultMessage="Alimony"
            />
          </Tooltip>
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="childSupport">
          <Tooltip text={tooltiptext.childSupport}>
            <FormattedMessage
                id="app.slides.spousalIncome.childSupport"
                description="Child support"
                defaultMessage="Child support"
            />
          </Tooltip>
        </IncomeSource>
      </IncomeType>
    )
  }
}

SpousalIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default SpousalIncome
