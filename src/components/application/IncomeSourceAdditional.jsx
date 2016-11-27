import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'
import IncomeSourceSingle from './IncomeSourceSingle'
import shortid from 'shortid'

@observer
class AdditionalIncome extends Component {
  constructor (props, context) {
    super(props, context)

    this.onAddIncomeClick = this.onAddIncomeClick.bind(this)
    this.onDeleteIncomeClick = this.onDeleteIncomeClick.bind(this)
  }

  // Handle the event when user clicks the Add Income Source Button
  onAddIncomeClick(){
    let incomeSource = this.props.incomeSource

    if (typeof(incomeSource.more) !== 'undefined') {
      this.context.applicationData.addIncomeSource(incomeSource)
    }
  }

  // Handle the event when user clicks the Delete Income Source Button
  onDeleteIncomeClick(event){
    let incomeSource = this.props.incomeSource
    let i = event.target.id

    this.context.applicationData.removeIncomeSource(incomeSource, i)
  }

  render() {
    const { showHourly, showAnnual } = this.props
    const incomeSource = this.props.incomeSource
    const incomeSourceProps = {
      showHourly: showHourly,
      showAnnual: showAnnual,
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
        { typeof(incomeSource.more) !== 'undefined' &&
          <div>

            {
              incomeSource.more.map( function(source, i) {

                return (
                  <div key={shortid.generate()}>
                    <div style={{borderTop: '1px solid LightGray', marginTop: '10px', paddingTop: '10px'}}>
                      <IncomeSourceSingle incomeSource={source} {...incomeSourceProps} />
                      <button id={i} {...deleteButtonProps}>Remove</button>
                    </div>
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
        }
      </div>
    )
  }
}

AdditionalIncome.contextTypes = {
  applicationData: PropTypes.object.isRequired
}

export default AdditionalIncome
