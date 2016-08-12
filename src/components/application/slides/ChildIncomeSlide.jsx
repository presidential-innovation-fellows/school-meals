import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import BooleanRadio from '../BooleanRadio'
import Alert from '../Alert'
import Button from '../Button'
import IncomeSource from '../IncomeSource'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { incomeTypeIsValid, informalName } from '../../../helpers'

@observer
class ChildIncomeSlide extends Component {
  @computed get allSourcesFalse() {
    const sources = this.props.person.incomeTypes.child.sources

    for (let key in sources) {
      if (sources[key].has !== false) {
        return false
      }
    }

    return true
  }

  render() {
    const { person } = this.props
    const incomeType = person.incomeTypes.child
    const incomeSources = incomeType.sources
    const name = informalName(person)

    return(
      <Slide header={name}
             id={`income/${person.id}/child`}
             helpArticle="child-income"
             nextDisabled={!incomeTypeIsValid(incomeType)}>

        <p className="usa-font-lead">Does <strong>{name}</strong> have income from any of the following sources?</p>

        <p>Income reported here should be the child’s current, <em>gross</em> income.</p>

        <p className="well"><dfn>Gross income</dfn> means all money earned or received before deductions, such as income taxes, social security taxes, and insurance premiums. You should not report net income, which is the amount of money received in a pay check. Net income is total (or gross) income, minus taxes and deductions, and is commonly referred to as “take home pay”.</p>

        <IncomeSource incomeSources={incomeSources} name="job">
          Money earned from a full or part-time job
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="socialSecurity">
          Social Security from a disability (SSDI) or Social Security survivor benefits
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="friendsFamily">
          Money regularly received from extended family or friends outside the household
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="pensionAnnuityTrust">
          Private pension fund, annuity, or trust
        </IncomeSource>

        <IncomeSource incomeSources={incomeSources} name="other">
          Any other source of income
        </IncomeSource>

        { this.allSourcesFalse &&
          <Alert heading="Missing Income">
            On a previous page, you indicated
            that <strong>{name}</strong> receives income.
            Please enter this income above or correct your previous answer.
            <Button className="usa-button-gray"
                    slideId="child-income">Change previous answer</Button>
          </Alert>
        }
      </Slide>
    )
  }
}

ChildIncomeSlide.propTypes = {
  person: PropTypes.object.isRequired
}

export default ChildIncomeSlide
