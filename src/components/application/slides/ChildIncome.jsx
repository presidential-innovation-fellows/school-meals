import React, { Component, PropTypes } from 'react'
import ChildIncomeOverview from './ChildIncomeOverview'
import ChildIncomeSlides from './ChildIncomeSlides'
import GrossIncome from './GrossIncome'
import { observer } from 'mobx-react'

@observer
class ChildIncome extends Component {
  render() {
    const { allChildren } = this.props

    return(
      <div>
        <ChildIncomeOverview allChildren={allChildren} />
        {this.props.showGrossIncomeDefinition && <GrossIncome />}
        <ChildIncomeSlides allChildren={allChildren} />
      </div>
    )
  }
}

ChildIncome.propTypes = {
  allChildren: PropTypes.arrayOf(PropTypes.object).isRequired,
  showGrossIncomeDefinition: PropTypes.bool
}

ChildIncome.defaultProps = {
  showGrossIncomeDefinition: false
}

export default ChildIncome
