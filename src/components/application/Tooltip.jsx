import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'

@observer
class Tooltipcomp extends Component {
  render() {
    const { id, text, target, children } = this.props

    return (
      <OverlayTrigger placement="top" overlay={
        <Tooltip>{text}</Tooltip> }>
        <strong className="info-target">
          {children || target}
          <Glyphicon glyph="question-sign" />
        </strong>
      </OverlayTrigger>
    )
  }
}

Tooltipcomp.propTypes = {
  text: PropTypes.string.isRequired,
  target: PropTypes.node,
  children: PropTypes.node,
}

export default Tooltipcomp
