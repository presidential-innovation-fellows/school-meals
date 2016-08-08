import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import IncomeTypeFormGroup from '../IncomeTypeFormGroup'
import { observer } from 'mobx-react'

@observer
class AdultIncomeOverview extends Component {
  get isValid() {
    const incomeTypes = this.props.person.incomeTypes

    if (incomeTypes.military.isApplicable &&
        incomeTypes.military.isDeployed == null) {
      return false
    }

    for (let incomeType in incomeTypes) {
      if (incomeTypes[incomeType].isApplicable == null) {
        return false
      }
    }

    return true
  }

  render() {
    const { person } = this.props

    return(
      <Slide header={person.firstName} id={`income/${person.id}`}
             helpArticle="adult-income-overview" nextDisabled={!this.isValid}>

        <IncomeTypeFormGroup person={person} incomeTypeName="military">
          Is <strong>{person.firstName}</strong> in the military?
        </IncomeTypeFormGroup>

        { person.incomeTypes.military.isApplicable &&
          <IncomeTypeFormGroup person={person} incomeTypeName="military"
                               boolAttribute="isDeployed" validate={false}>
            Is <strong>{person.firstName}</strong> currently deployed?
          </IncomeTypeFormGroup>
        }

        <IncomeTypeFormGroup person={person} incomeTypeName="employment">
          Does <strong>{person.firstName}</strong> have earnings from work including salary, wages, tips, commissions, cash bonuses or net income from self-employment{person.incomeTypes.military.isApplicable && ', not including earnings from the military'}?
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="publicAssistance">
          Does <strong>{person.firstName}</strong> have income from public assistance including Supplemental Security Income (SSI), or cash assistance or housing subsidies from state or local government?
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="spousal">
          Does <strong>{person.firstName}</strong> have income from alimony or child support?
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="unemployment">
          Does <strong>{person.firstName}</strong> have income from unemployment benefits, Veteran's benefits, worker's compensation, strike benefits, or Social Security Disability Insurance (SSDI)?
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="retirement">
          Does <strong>{person.firstName}</strong> have retirement income from Social Security (including Black Lung Benefits and Railroad Retirement) or private pensions?
        </IncomeTypeFormGroup>

        <IncomeTypeFormGroup person={person} incomeTypeName="other">
          Does <strong>{person.firstName}</strong> have other sources of income including regular cash payments from outside the household, rental income, earned interest, investment income and annuities, or any other source of income available to pay for children’s school meals?
        </IncomeTypeFormGroup>

      </Slide>
    )
  }
}

AdultIncomeOverview.propTypes = {
  person: PropTypes.object.isRequired
}

export default AdultIncomeOverview
