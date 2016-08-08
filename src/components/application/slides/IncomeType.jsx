import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import IncomeTypeDefaultText from './IncomeTypeDefaultText'
import { observer } from 'mobx-react'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class IncomeType extends Component {
  render() {
    const { person, name, label, showDefaultText, showMilitaryCaveat } = this.props
    const incomeType = person.incomeTypes[name]
    const incomeSources = incomeType.sources
    const defaultTextProps = { person, showMilitaryCaveat }

    return(
      <Slide header={person.firstName}
             id={`income/${person.id}/${name}`}
             helpArticle={`${name}-income`}
             nextDisabled={!incomeTypeIsValid(incomeType)}>
        {showDefaultText && <IncomeTypeDefaultText {...defaultTextProps} />}
        {this.props.children}
      </Slide>
    )
  }
}

IncomeType.propTypes = {
  person: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  showDefaultText: PropTypes.bool,
  showMilitaryCaveat: PropTypes.bool
}

IncomeType.defaultProps = {
  showDefaultText: true,
  showMilitaryCaveat: false
}

export default IncomeType
