import React, { Component, PropTypes } from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import BooleanRadio from './BooleanRadio'
import { Alert, ControlLabel, FormGroup } from 'react-bootstrap'
import { informalName } from '../../helpers'

@observer
class IncomeTypeFormGroup extends Component {
  @computed get isError() {
    const { incomeTypeName, person, validate } = this.props
    const incomeType = person.incomeTypes[incomeTypeName]

    // no problem if we don't care about validating
    if (!validate) {
      return false
    }

    // no problem if not applicable
    if (!incomeType.isApplicable) {
      return false
    }

    // ensure that not all sources of this income type are false
    const sources = incomeType.sources
    for (let key in sources) {
      if (sources[key].has !== false) {
        return false
      }
    }

    return true
  }

  render() {
    const { boolAttribute, incomeDescription, incomeTypeName, person } = this.props
    const incomeType = person.incomeTypes[incomeTypeName]

    return (
      <FormGroup validationState={this.isError && 'error' || null}>
        {
          this.isError &&
          <Alert bsStyle="danger">
            <h4>Missing Income</h4>
            <p>
              You indicated
              that <strong>{informalName(person)}</strong> receives
              {' ' + incomeDescription}, but you selected "No" for
              each related income source on a following page. Please
              correct this answer or provide details on the following pages.
            </p>
          </Alert>
        }
        <ControlLabel>{this.props.children}</ControlLabel>
        <BooleanRadio name={boolAttribute} object={incomeType} />
      </FormGroup>
    )
  }
}

IncomeTypeFormGroup.propTypes = {
  incomeTypeName: PropTypes.string.isRequired,
  person: PropTypes.object.isRequired,
  boolAttribute: PropTypes.string,
  incomeDescription: PropTypes.string,
  validate: PropTypes.bool
}

IncomeTypeFormGroup.defaultProps = {
  boolAttribute: 'isApplicable',
  incomeDescription: 'income of the following type',
  validate: true
}

export default IncomeTypeFormGroup
