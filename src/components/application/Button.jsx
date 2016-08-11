import classnames from 'classnames';
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Button extends Component {
  render() {
    const { disabled, onClick, type } = this.props
    let { className } = this.props

    if (typeof className === 'string') {
      let key = className
      className = {}
      className[key] = true
    }

    className['usa-button-disabled'] = disabled

    const props = {
      className: classnames(className),
      onClick,
      type
    }

    return (
      <button {...props}>{this.props.children}</button>
    )
  }
}

Button.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
}

Button.defaultProps = {
  className: {},
  disabled: false,
  type: 'button'
}

export default Button
