import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import IncomeQuestion from '../IncomeQuestion'
import { Well } from 'react-bootstrap'

@observer
class ChildIncomeForm extends Component {
  render() {
    const { incomeObject } = this.props

    return(
      <div>
        <Well>Gross income means all money earned or received before deductions, such as income taxes, social security taxes, and insurance premiums. You should not report net income, which is the amount of money received in a pay check. Net income is total (or gross) income, minus taxes and deductions, and is commonly referred to as “take home pay”.</Well>

        <IncomeQuestion incomeObject={incomeObject} name="job">
          Money earned from a full or part-time job
        </IncomeQuestion>

        <IncomeQuestion incomeObject={incomeObject} name="socialSecurity">
          <a>Social Security from a disability (SSDI) or Social Security survivor benefits</a>
        </IncomeQuestion>

        <IncomeQuestion incomeObject={incomeObject} name="friendsFamily">
          Money regularly received from extended family or friends outside the household
        </IncomeQuestion>

        <IncomeQuestion incomeObject={incomeObject} name="pensionAnnuityTrust">
          Private pension fund, annuity, or trust
        </IncomeQuestion>

        <IncomeQuestion incomeObject={incomeObject} name="other">
          Any other source of income
        </IncomeQuestion>
      </div>
    )
  }
}

ChildIncomeForm.propTypes = {
  incomeObject: PropTypes.object.isRequired
}

export default ChildIncomeForm
