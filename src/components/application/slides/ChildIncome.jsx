import React, { Component, PropTypes } from 'react'
import ChildIncomeSlide from './ChildIncomeSlide'
import { observer } from 'mobx-react'

@observer
class ChildIncome extends Component {
  render() {
    return(
      <div>
        {this.props.allChildren.map(person =>
          <ChildIncomeSlide person={person} key={person.id} />
        )}
      </div>
    )
  }
}

ChildIncome.propTypes = {
  allChildren: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ChildIncome
