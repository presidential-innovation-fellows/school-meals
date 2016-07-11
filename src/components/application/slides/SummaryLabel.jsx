import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import SummaryLabelContent from './SummaryLabelContent'

@observer
class SummaryLabel extends Component {
  render() {
    return (
      <h4>
        <SummaryLabelContent id={this.props.id}>
          {this.props.children}
        </SummaryLabelContent>
      </h4>
    )
  }
}

SummaryLabel.propTypes = {
  id: PropTypes.string
}

export default SummaryLabel
