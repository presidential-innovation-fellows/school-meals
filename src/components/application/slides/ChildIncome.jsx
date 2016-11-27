import React, { Component, PropTypes } from 'react'
import ChildIncomeOverview from './ChildIncomeOverview'
import ChildIncomeSlides from './ChildIncomeSlides'
import { observer } from 'mobx-react'

@observer
class ChildIncome extends Component {
  render() {
    const { allChildren } = this.props

    return (
      <div>
        <ChildIncomeOverview allChildren={allChildren} />
        <ChildIncomeSlides allChildren={allChildren} />
      </div>
    )
  }
}

ChildIncome.propTypes = {
  allChildren: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ChildIncome
