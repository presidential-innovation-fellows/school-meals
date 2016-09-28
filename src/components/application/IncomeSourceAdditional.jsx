import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { hoursExceedPeriodCapacity } from '../../helpers'
import BooleanRadio from './BooleanRadio'
import Checkbox from './Checkbox'
import Form from './Form'
import IncomeSourceAmount from './IncomeSourceAmount'
import IncomeSourceFrequency from './IncomeSourceFrequency'
import IncomeSourceHourlyPeriod from './IncomeSourceHourlyPeriod'
import IncomeSourceSummary from './IncomeSourceSummary'
import IncomeSource from './IncomeSource'

import IncomeSourceSingle from './IncomeSourceSingle'

@observer
class AdditionalIncome extends Component {

  constructor (props) {
    super(props)
    this.addNewIncome = this.addNewIncome.bind(this)
    this.deleteIncome = this.deleteIncome.bind(this)
    this.onAddIncomeClick = this.onAddIncomeClick.bind(this)
    this.onDeleteIncomeClick = this.onDeleteIncomeClick.bind(this)
  }


  get error() {

    return null
  }


  addNewIncome(){
    /*
        This is a function to add a new item. Creates an empty income object
        and adds it to the more[] array for the incomeSource
    */
  }

  /*
        Note: Edits should already be covered because I pass a pointer to the
        the income object in the more array to the IncomeSourceSingle component
   */


  deleteIncome(index){
    /*
        Need a function to remove an income line from the list and from the
        more[] array.
     */
  }

  onAddIncomeClick(){
    /*
        Need to handle the event when user clicks the Add Income link
     */
    console.log("onAddIncomeClick was called\n")
  }

  onDeleteIncomeClick(){
    /*
        Need to handle the event when the user clicks the Delete Income button
     */
  }


  render() {
    const { name, showHourly, showAnnual } = this.props
    const incomeSource = this.props.incomeSource
    const error = this.error
    const frequencyProps = {
      incomeSource,
      showHourly,
      showAnnual
    }


    return (
      <div>
        { typeof(incomeSource.more) != "undefined" &&
          <div>

            {
              incomeSource.more.map( function(source, i) {
                return (<div><strong>{i+2}:</strong> <a href="#">[Delete]</a> <IncomeSourceSingle incomeSource={source} name={name} showHourly={showHourly} showAnnual={showAnnual}/> </div>)
              })
            }
            <button type="button" className="btn-xs" name="something" id="123"  onClick={this.onAddIncomeClick()} >+ Add New</button>
          </div>
        }
      </div>
    )
  }
}



export default AdditionalIncome
