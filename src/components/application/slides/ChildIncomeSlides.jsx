import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import ChildIncomeSlide from './ChildIncomeSlide'

@observer
class ChildIncomeSlides extends Component {
  get childrenWithIncome() {
    const children = this.props.allChildren
    return children.filter(child => child.incomeTypes.child.isApplicable)
  }

  render() {
    return (
      <div>
        {this.childrenWithIncome.map(child =>
          <ChildIncomeSlide person={child} key={child.id} />)
        }
      </div>
    )
  }
}

ChildIncomeSlides.propTypes = {
  allChildren: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ChildIncomeSlides
