import React, { Component, PropTypes } from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import BooleanRadio from './BooleanRadio'
import { informalName } from '../../helpers'
import { FormattedMessage } from 'react-intl'

@observer
class IncomeTypeFormGroup extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  @computed get isError() {
    const { incomeTypeName, person, validate } = this.props
    const incomeType = person.incomeTypes[incomeTypeName]

    // No problem if we don't care about validating.
    if (!validate) {
      return false
    }

    // No problem if not applicable.
    if (!incomeType.isApplicable) {
      return false
    }

    // Ensure that not all sources of this income type are false.
    const sources = incomeType.sources
    for (const key in sources) {
      if (sources[key].has !== false) {
        return false
      }
    }

    return true
  }

  handleChange(fieldName, value, incomeType) {
    incomeType[fieldName] = value

    if (!value && fieldName !== 'isDeployed') {
      // Clear each income source under this income type.
      for (const sourceKey in incomeType.sources) {
        incomeType.sources[sourceKey] = {
          has: null,
          lineItems: []
        }
      }

      // Special case for military.
      if ('isDeployed' in incomeType) {
        incomeType.isDeployed = null
      }
    }
  }

  render() {
    const { boolAttribute, incomeTypeName, person } = this.props
    const incomeType = person.incomeTypes[incomeTypeName]

    return (
      <div>
        {
          this.isError &&
          <div className="usa-alert usa-alert-warning">
            <div className="usa-alert-body">
              <h3 className="usa-alert-heading">
                <FormattedMessage
                    id="app.slides.incomeTypeFormGroup.missingIncomeTitle"
                    description="Missing Income alert title"
                    defaultMessage="Missing Income"
                />
              </h3>
              <p className="usa-alert-text">
                <FormattedMessage
                    id="app.slides.incomeTypeFormGroup.missingIncome"
                    description="Missing Income alert"
                    defaultMessage="You indicated that {person} receives income of the following type, but you selected “No” for each related income source on a following page. Please correct this answer or provide details on the following pages."
                    values={{
                      person: <strong>{informalName(person)}</strong>
                    }}
                />
              </p>
            </div>
          </div>
        }
        <label>{this.props.children}</label>
        <BooleanRadio
            name={boolAttribute}
            object={incomeType}
            onChange={this.handleChange}
        />
      </div>
    )
  }
}

IncomeTypeFormGroup.propTypes = {
  incomeTypeName: PropTypes.string.isRequired,
  person: PropTypes.object.isRequired,
  boolAttribute: PropTypes.string,
  validate: PropTypes.bool
}

IncomeTypeFormGroup.defaultProps = {
  boolAttribute: 'isApplicable',
  validate: true
}

export default IncomeTypeFormGroup
