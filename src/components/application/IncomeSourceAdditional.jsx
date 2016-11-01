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

    this.onAddIncomeClick = this.onAddIncomeClick.bind(this)
    this.onDeleteIncomeClick = this.onDeleteIncomeClick.bind(this)

  }


  get error() {

    return null
  }



  /*
        Handle the event when user clicks the Add Income Source Button
  */
  onAddIncomeClick(){

    let incomeSource = this.props.incomeSource

    if (typeof(incomeSource.more) != "undefined") {

      incomeSource.add(incomeSource)

    }

  }

  /*
        Handle the event when user clicks the Delete Income Source Button
  */
  onDeleteIncomeClick(event){

    let incomeSource = this.props.incomeSource

    let i = event.target.id

    incomeSource.remove(incomeSource, i)
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
      className: "usa-button-secondary add-income",
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
