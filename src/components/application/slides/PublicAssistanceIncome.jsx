import React, { Component, PropTypes } from 'react'
import IncomeSource from '../IncomeSource'
import IncomeType from './IncomeType'
import { observer } from 'mobx-react'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'
import FormattedMessage from '../FormattedMessage'

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
        <FormattedMessage
              id="app.slides.publicAssistanceIncome.ssi"
              description="SSI"
              defaultMessage="Supplemental Security Income &nbsp;{tooltip}"
              values={{
                tooltip:
                        <Tooltipcomp text={tooltiptext.SSI}>
                          <FormattedMessage
                            id="app.slides.publicAssistanceIncome.ssiToolTip"
                            description="SSI tooltip"
                            defaultMessage="(SSI)"
                          />
                        </Tooltipcomp>
              }}
          />
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="stateLocal">
        <FormattedMessage
              id="app.slides.publicAssistanceIncome.cashAssistance"
              description="SSI"
              defaultMessage="{tooltip}&nbsp; from state or local government (including housing subsidies)"
              values={{
                tooltip:
                        <Tooltipcomp text={tooltiptext.cashAssistance}>
                          <FormattedMessage
                            id="app.slides.publicAssistanceIncome.cashAssistanceToolTip"
                            description="Cash assistance"
                            defaultMessage="Cash assistance"
                          />
                        </Tooltipcomp>
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
