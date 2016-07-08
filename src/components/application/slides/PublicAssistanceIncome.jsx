import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import IncomeSource from '../IncomeSource'
import { observer } from 'mobx-react'
import { ControlLabel, Well } from 'react-bootstrap'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class PublicAssistanceIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.publicAssistance
    const incomeSources = incomeType.sources

    return(
      <Slide header="Public Assistance"
             headerSmall={person.firstName}
             nextDisabled={!incomeTypeIsValid(incomeType)}>

        <p>
          Does <strong>{person.firstName}</strong> have income from public assistance including Supplemental Security Income (SSI), or cash assistance or housing subsidies from state or local government?
        </p>

        <BooleanRadio name="isApplicable" object={incomeType} />

        {incomeType.isApplicable &&
         <div>
           <Well>
             NOTE: Remember, to report gross income, which is all money earned before deductions, such as income taxes, employee's social security taxes, and insurance premiums.
           </Well>

           <IncomeSource incomeSources={incomeSources} name="ssi">
             Supplemental Security Income (SSI)
           </IncomeSource>

           <IncomeSource incomeSources={incomeSources} name="stateLocal">
             Cash assistance from state or local government (including housing subsidies)
           </IncomeSource>
         </div>
        }
      </Slide>
    )
  }
}

PublicAssistanceIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default PublicAssistanceIncome
