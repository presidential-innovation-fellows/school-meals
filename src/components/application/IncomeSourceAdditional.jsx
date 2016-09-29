import React, { Component, PropTypes } from 'react'
import { observer, observable} from 'mobx-react'
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

import shortid from 'shortid'

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

    console.log("Removing from element: " + index);



  }

  onAddIncomeClick(){
    /*
        Need to handle the event when user clicks the Add Income link
     */

    let incomeSource = this.props.incomeSource


    if (typeof(incomeSource.more) != "undefined") {

      console.log("onAddIncomeClick was called\n")
      console.log("Before: \n")

      console.log(incomeSource.more)

      incomeSource.add(incomeSource)


      console.log("After: \n")
      console.log(incomeSource.more)
    }

  }

  onDeleteIncomeClick(event){
    /*
        Need to handle the event when the user clicks the Delete Income button
     */


    let incomeSource = this.props.incomeSource

    let i = event.target.id

    console.log("onDeleteIncomeClick was called for : " + i + "\n")

    incomeSource.remove(incomeSource, i)
  }

  onDeleteTest(event){

    // let event = event || window.event

    console.log("Entering OnDeleteTest...\n")
    console.log(event)
    console.log(event.target)
    console.log("This is a " + event.target.tagName + " and the id is " + event.target.id)


  }


  render() {
    const { name, showHourly, showAnnual } = this.props
    const incomeSource = this.props.incomeSource
    const error = this.error
    const incomeSourceProps = {
      name: name,
      showHourly: showHourly,
      showAnnual: showAnnual,
      key: shortid.generate()
    }
    const addButtonProps = {
      key: shortid.generate(),
      name: "addIncomeButton",
      type: "button",
      className: "usa-button-secondary",
      onClick: this.onAddIncomeClick
    }

    const deleteButtonProps = {
      name: "deleteIncomeButton",
      key: shortid.generate(),
      type: "button",
      className: "usa-button-gray",
      onClick: this.onDeleteIncomeClick
    }




    return (
      <div>
        { typeof(incomeSource.more) != "undefined" &&
          <div>

            {
              incomeSource.more.map( function(source, i) {

                return (<div> <div style={{borderTop: "1px solid LightGray", marginTop: "10px", paddingTop: "10px"}} key={shortid.generate()}> <IncomeSourceSingle incomeSource={source} {...incomeSourceProps}/>  <button id={i} {...deleteButtonProps}>Remove</button> </div></div>)

                //return (<div key={shortid.generate()}> <IncomeSourceSingle incomeSource={source} {...incomeSourceProps}/>  <button id={i} {...deleteButtonProps}>Remove {i+2}</button> </div>)
              }, this)
            }
            <button {...addButtonProps} >+ Add Income Source</button>
          </div>
        }
      </div>
    )
  }
}



export default AdditionalIncome
