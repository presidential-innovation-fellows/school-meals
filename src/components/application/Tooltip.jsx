import shortid from 'shortid'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Tooltip as BootstrapTooltip, Glyphicon, OverlayTrigger } from 'react-bootstrap'

@observer
class Tooltip extends Component {
  render() {
    const { text, target, children } = this.props
    const id = shortid.generate()

    return (
      <OverlayTrigger placement="top" overlay={<BootstrapTooltip id={id}>{text}</BootstrapTooltip>}>
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
  children: PropTypes.node
}

export default Tooltip
