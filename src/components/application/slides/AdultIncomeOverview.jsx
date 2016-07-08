import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import { observer } from 'mobx-react'
import { ControlLabel } from 'react-bootstrap'

@observer
class AdultIncomeOverview extends Component {
  get isValid() {
    return false
  }

  render() {
    const { person } = this.props

    return(
      <Slide header={person.firstName} nextDisabled={!this.isValid}>

        <p>
          Does <strong>{person.firstName}</strong> have earnings from work including salary, wages, tips, commissions, cash bonuses or net income from self-employment{person.incomeTypes.military.isApplicable && ', not including earnings from the military that were already reported'}?
        </p>
        <BooleanRadio name="isApplicable"
                      object={person.incomeTypes.employment} />

        <p>
          Does <strong>{person.firstName}</strong> have income from public assistance including Supplemental Security Income (SSI), or cash assistance or housing subsidies from state or local government?
        </p>
        <BooleanRadio name="isApplicable"
                      object={person.incomeTypes.publicAssistance} />

        <p>
          Does <strong>{person.firstName}</strong> have income from alimony or child support?
        </p>
        <BooleanRadio name="isApplicable"
                      object={person.incomeTypes.spousal} />

        <p>
          Does <strong>{person.firstName}</strong> have income from unemployment benefits, worker's compensation, strike benefits, or Social Security Disability Insurance (SSDI)?
        </p>
        <BooleanRadio name="isApplicable"
                      object={person.incomeTypes.unemployment} />

        <p>
          Does <strong>{person.firstName}</strong> have retirement income from Social Security (including Black Lung Benefits and Railroad Retirement) or private pensions?
        </p>
        <BooleanRadio name="isApplicable"
                      object={person.incomeTypes.retirement} />

        <p>
          Does <strong>{person.firstName}</strong> have other sources of income including regular cash payments from outside the household, rental income, earned interest, investment income and annuities, or any other source of income available to pay for children’s school meals?
        </p>
        <BooleanRadio name="isApplicable"
                      object={person.incomeTypes.other} />

      </Slide>
    )
  }
}

AdultIncomeOverview.propTypes = {
  person: PropTypes.object.isRequired
}

export default AdultIncomeOverview
