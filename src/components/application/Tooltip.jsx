import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Glyphicon, OverlayTrigger, Tooltip as BootstrapTooltip } from 'react-bootstrap'

@observer
class Tooltip extends Component {
  render() {
    const { id, text, target, children } = this.props

    return (
      <OverlayTrigger placement="top" overlay={
        <BootstrapTooltip>{text}</BootstrapTooltip> }>
        <strong className="info-target">
          {children || target}
          <Glyphicon glyph="question-sign" />
        </strong>
      </OverlayTrigger>
    )
  }
}

Tooltip.propTypes = {
  text: PropTypes.node.isRequired,
  target: PropTypes.node,
  children: PropTypes.node,
}

export default Tooltip
