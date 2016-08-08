import React, { Component, PropTypes } from 'react'
import AdultIncomeSlides from './AdultIncomeSlides'
import GrossIncome from './GrossIncome'
import { observer } from 'mobx-react'

@observer
class AdultIncome extends Component {
  render() {
    return(
      <div>
        {this.props.showGrossIncomeDefinition && <GrossIncome />}
        {this.props.adults.map(person =>
          <AdultIncomeSlides person={person} key={person.id} />
        )}
      </div>
    )
  }
}

AdultIncome.propTypes = {
  adults: PropTypes.object.isRequired,
  showGrossIncomeDefinition: PropTypes.bool
}

AdultIncome.defaultProps = {
  showGrossIncomeDefinition: false
}

export default AdultIncome
