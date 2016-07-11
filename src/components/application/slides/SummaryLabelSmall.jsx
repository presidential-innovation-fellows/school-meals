import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import SummaryLabelContent from './SummaryLabelContent'

@observer
class SummaryLabelSmall extends Component {
  render() {
    return (
      <h5>
        <SummaryLabelContent id={this.props.id}>
          {this.props.children}
        </SummaryLabelContent>
      </h5>
    )
  }
}

SummaryLabelSmall.propTypes = {
  id: PropTypes.string
}

export default SummaryLabelSmall
