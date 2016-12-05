import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltip from '../Tooltip'
import { FormattedMessage } from 'react-intl'

@observer
class PublicAssistanceIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.publicAssistance
    const incomeSources = incomeType.sources
    const incomeTypeProps = {
      name: 'publicAssistance',
      person
    }

    return (
      <IncomeType {...incomeTypeProps}>

        <IncomeSource incomeSources={incomeSources} name="ssi">
          <FormattedMessage
              id="app.slides.publicAssistanceIncome.ssi"
              description="SSI"
              defaultMessage="Supplemental Security Income {tooltip}"
              values={{
                tooltip:
                  <Tooltip text={tooltiptext.SSI}>
                    <FormattedMessage
                        id="app.slides.publicAssistanceIncome.ssiToolTip"
                        description="SSI tooltip"
                        defaultMessage="(SSI)"
                    />
                  </Tooltip>
              }}
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="stateLocal">
          <FormattedMessage
              id="app.slides.publicAssistanceIncome.cashAssistance"
              description="SSI"
              defaultMessage="{tooltip} from state or local government (including housing subsidies)"
              values={{
                tooltip:
                  <Tooltip text={tooltiptext.cashAssistance}>
                    <FormattedMessage
                        id="app.slides.publicAssistanceIncome.cashAssistanceToolTip"
                        description="Cash assistance"
                        defaultMessage="Cash assistance"
                    />
                  </Tooltip>
              }}
          />
        </IncomeSource>
      </IncomeType>
    )
  }
}

PublicAssistanceIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default PublicAssistanceIncome
