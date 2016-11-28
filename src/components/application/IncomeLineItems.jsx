import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'
import Button from './Button'
import IncomeLineItem from './IncomeLineItem'

@observer
class IncomeLineItems extends Component {
  constructor(props, context) {
    super(props, context)

    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleAdd(){
    const { incomeSource } = this.props

    this.context.applicationData.addIncomeLineItem(incomeSource)
  }

  handleRemove(lineItem) {
    const { incomeSource } = this.props

    this.context.applicationData.removeIncomeLineItem(incomeSource, lineItem)
  }

  render() {
    const { incomeSource, showHourly, showAnnual } = this.props

    return (
      <div className="income-line-items">
        {
          incomeSource.lineItems.map(lineItem => {
            return <IncomeLineItem
                key={lineItem.id}
                lineItem={lineItem}
                showHourly={showHourly}
                showAnnual={showAnnual}
                allowRemove={incomeSource.lineItems.length > 1}
                onRemove={this.handleRemove}
                   />
          })
        }
        <Button className="usa-button-primary-alt" onClick={this.handleAdd}>
          + <FormattedMessage
              id="app.incomeLineItems.addButton"
              description="Button text to add an income source line item."
              defaultMessage="Add Income Source"
            />
        </Button>
      </div>
    )
  }
}

IncomeLineItems.contextTypes = {
  applicationData: PropTypes.object.isRequired
}

IncomeLineItems.propTypes = {
  incomeSource: PropTypes.object.isRequired,
  showAnnual: PropTypes.bool,
  showHourly: PropTypes.bool
}

export default IncomeLineItems
