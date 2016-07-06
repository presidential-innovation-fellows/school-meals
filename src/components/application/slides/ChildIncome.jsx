import React, { Component, PropTypes } from 'react'
import ChildIncomeSlide from './ChildIncomeSlide'
import { observer } from 'mobx-react'

@observer
class ChildIncome extends Component {
  get children() {
    return this.props.childCollections
               .map(collection => collection.items.slice())
               .reduce((a, b) => a.concat(b), [])
  }

  render() {
    return(
      <div>
        {this.children.map(child =>
          <ChildIncomeSlide child={child} key={child.id} />
        )}
      </div>
    )
  }
}

ChildIncome.propTypes = {
  childCollections: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ChildIncome
