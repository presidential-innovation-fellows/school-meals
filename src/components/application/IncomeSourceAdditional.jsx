import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'
import IncomeSourceSingle from './IncomeSourceSingle'
import shortid from 'shortid'

@observer
class IncomeSourceAdditional extends Component {
  constructor(props, context) {
    super(props, context)

    this.onAddIncomeClick = this.onAddIncomeClick.bind(this)
    this.onDeleteIncomeClick = this.onDeleteIncomeClick.bind(this)
  }

  // Handle the event when user clicks the Add Income Source Button
  onAddIncomeClick(){
    const incomeSource = this.props.incomeSource

    if (typeof (incomeSource.more) !== 'undefined') {
      this.context.applicationData.addIncomeSource(incomeSource)
    }
  }

  // Handle the event when user clicks the Delete Income Source Button
  onDeleteIncomeClick(event){
    const incomeSource = this.props.incomeSource
    const i = event.target.id

    this.context.applicationData.removeIncomeSource(incomeSource, i)
  }

  render() {
    const { showHourly, showAnnual } = this.props
    const incomeSource = this.props.incomeSource
    const incomeSourceProps = {
      showHourly,
      showAnnual,
      key: shortid.generate()
    }
    const addButtonProps = {
      key: shortid.generate(),
      name: 'addIncomeButton',
      type: 'button',
      className: 'usa-button-primary-alt',
      onClick: this.onAddIncomeClick
    }

    const deleteButtonProps = {
      name: 'deleteIncomeButton',
      key: shortid.generate(),
      type: 'button',
      className: 'usa-button-gray',
      onClick: this.onDeleteIncomeClick
    }

    return (
      <div>
        { incomeSource.more.map(source => {
          return (
            <div key={shortid.generate()}>
              <IncomeSourceSingle incomeSource={source} {...incomeSourceProps} />
              <button {...deleteButtonProps}>Remove</button>
            </div>
          )
        }, this)
        }
        <button {...addButtonProps} >
          + <FormattedMessage
              id="app.incomeSourceAdditional.addButton"
              description="Button text to add an income source"
              defaultMessage="Add Income Source"
            />
        </button>
      </div>
    )
  }
}

IncomeSourceAdditional.contextTypes = {
  applicationData: PropTypes.object.isRequired
}

export default IncomeSourceAdditional
