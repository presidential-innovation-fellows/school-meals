import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import BooleanRadio from './BooleanRadio'
import Form from './Form'
import IncomeLineItems from './IncomeLineItems'

@observer
class IncomeSource extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(fieldName, value, incomeSource) {
    incomeSource[fieldName] = value

    if (value) {
      if (!incomeSource.lineItems.length) {
        this.context.applicationData.addIncomeLineItem(incomeSource)
      }
    } else {
      incomeSource.lineItems = []
    }
  }

  render() {
    const { name, showHourly, showAnnual } = this.props
    const incomeSource = this.props.incomeSources[name]

    return (
      <div>
        <Form>
          <label>{this.props.children}</label>
          <BooleanRadio
              name="has"
              object={incomeSource}
              onChange={this.handleChange}
          />

          {incomeSource.has &&
          <IncomeLineItems
              incomeSource={incomeSource}
              showHourly={showHourly}
              showAnnua={showAnnual}
          />
          }
        </Form>
      </div>
    )
  }
}

IncomeSource.contextTypes = {
  applicationData: PropTypes.object.isRequired
}

IncomeSource.propTypes = {
  incomeSources: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  showHourly: PropTypes.bool,
  showAnnual: PropTypes.bool
}

IncomeSource.defaultProps = {
  showHourly: false,
  showAnnual: false
}

export default IncomeSource
