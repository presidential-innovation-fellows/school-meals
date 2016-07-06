import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import IncomeQuestion from '../IncomeQuestion'
import { observer } from 'mobx-react'
import { ControlLabel } from 'react-bootstrap'
import { incomesAreValid } from '../../../helpers'

@observer
class MilitarySlide extends Component {
  get isValid() {
    const military = this.props.person.military

    switch (military.isMilitary) {
      case true:
        return military.isDeployed != null && incomesAreValid(military.income)
        break
      case false:
        return true
        break
      default:
        return false
    }
  }

  render() {
    const { person } = this.props
    const military = person.military

    return(
      <Slide header="Military" headerSmall={person.firstName}
             nextDisabled={!this.isValid}>

        <ControlLabel>Is {person.firstName} in the military?</ControlLabel>
        <BooleanRadio name="isMilitary" object={military} />

        {military.isMilitary &&
         <div>
           <ControlLabel>
             Is {person.firstName} currently deployed?
           </ControlLabel>
           <BooleanRadio name="isDeployed" object={military} />
         </div>
        }

        {military.isMilitary && military.isDeployed != null &&
         <div>
           {military.isDeployed ?
            <p>
              Military basic pay, drill pay, cash bonuses and allowances for off-base housing, food or clothing are includable income sources. Do not include combat pay, Family Substance Supplemental Allowance, or privatized housing allowances.
            </p>
            :
            <p>
              Military basic pay made available to the household, cash bonuses and allowances for off-base housing, food or clothing are includable income sources. Do not include combat pay, Family Substance Supplemental Allowance, or privatized housing allowances.
            </p>
           }
            <p>
              Does <strong>{person.firstName}</strong> have earning from the following sources?
            </p>

            <br />

            <IncomeQuestion incomeObject={military.income} name="basic">
              {military.isDeployed ?
               'Military basic pay/drill pay' :
               'Military basic pay (made available to the household)'}
            </IncomeQuestion>

            <IncomeQuestion incomeObject={military.income} name="cashBonus">
              Military cash bonus
            </IncomeQuestion>

            <IncomeQuestion incomeObject={military.income} name="allowance">
              Military allowance for off-base housing (other than privatized housing allowances), food, clothing
            </IncomeQuestion>
         </div>
        }
      </Slide>
    )
  }
}

MilitarySlide.propTypes = {
  person: PropTypes.object.isRequired
}

export default MilitarySlide
