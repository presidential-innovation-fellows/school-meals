import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import IncomeSource from '../IncomeSource'
import { observer } from 'mobx-react'
import { ControlLabel } from 'react-bootstrap'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class SpousalIncome extends Component {
  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.spousal
    const incomeSources = incomeType.sources

    return(
      <Slide header="Spousal Income"
             headerSmall={person.firstName}
             nextDisabled={!incomeTypeIsValid(incomeType)}>

        <p>
          Does <strong>{person.firstName}</strong> have income from alimony or child support?
        </p>

        <BooleanRadio name="isApplicable" object={incomeType} />

        {incomeType.isApplicable &&
         <div>
           <br />

           <IncomeSource incomeSources={incomeSources} name="alimony">
             Alimony
           </IncomeSource>

           <IncomeSource incomeSources={incomeSources} name="childSupport">
             Child support
           </IncomeSource>
         </div>
        }
      </Slide>
    )
  }
}

SpousalIncome.propTypes = {
  person: PropTypes.object.isRequired
}

export default SpousalIncome
