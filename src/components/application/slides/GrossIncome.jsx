import React, { Component } from 'react'
import Slide from '../Slide'
import { observer } from 'mobx-react'

@observer
class GrossIncome extends Component {
  render() {
    const { students } = this.props

    return (
      <Slide header="Gross Income" id="gross-income" showHelp={false}>

        <p>The next section will ask you about the income of adults in your household. All of the income that you enter should be <strong>gross income</strong>.</p>

        <p>Gross income means <strong>all money earned or received <em>before</em> deductions</strong> such as income taxes, social security taxes, and insurance premiums. You should <em>not</em> report net income, which is the amount of money received in a pay check. Net income is total (or gross) income, minus taxes and deductions, and is commonly referred to as "take home pay".</p>

      </Slide>
    )
  }
}

export default GrossIncome
