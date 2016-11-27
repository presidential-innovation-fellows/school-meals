import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import EditLink from '../EditLink'

@observer
class SummaryLabelContent extends Component {
  render() {
    return (
      <span>
        {this.props.id
         ?
           <span key={this.props.id}>
             <EditLink id={this.props.id}>{this.props.children}</EditLink>
           </span>
         :
           <span>{this.props.children}</span>
        }
      </span>
    )
  }
}

SummaryLabelContent.propTypes = {
  id: PropTypes.string
}

export default SummaryLabelContent
