import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import IncomeTypeDefaultText from './IncomeTypeDefaultText'
import { observer } from 'mobx-react'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class IncomeType extends Component {
  render() {
    const { person, name, label, showDefaultText } = this.props
    const incomeType = person.incomeTypes[name]
    const incomeSources = incomeType.sources

    return(
      <Slide header={person.firstName}
             headerSmall={label}
             nextDisabled={!incomeTypeIsValid(incomeType)}>
        {showDefaultText && <IncomeTypeDefaultText person={person} />}
        {this.props.children}
      </Slide>
    )
  }
}

IncomeType.propTypes = {
  person: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  showDefaultText: PropTypes.bool
}

IncomeType.defaultProps = {
  showDefaultText: true
}

export default IncomeType
