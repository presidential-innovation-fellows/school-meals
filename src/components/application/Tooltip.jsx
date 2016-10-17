import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'

@observer
class Tooltipcomp extends Component {
  render() {
    const { id, text, target, texttwo, } = this.props

    return (
      <OverlayTrigger placement="top" overlay={ 
        <Tooltip id={this.props.id}> {this.props.text} &nbsp; </Tooltip> }>
        <strong className="info-target">
          {this.props.target}
          <Glyphicon glyph="question-sign" />
        </strong>
      </OverlayTrigger>
    )
  }
}

Tooltipcomp.propTypes = {
  id: PropTypes.any,
  text: PropTypes.any,
  target: PropTypes.any,
}

export default Tooltipcomp
