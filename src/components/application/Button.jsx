import classnames from 'classnames';
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Button extends Component {
  render() {
    const { disabled, type, slideId } = this.props
    let { className, onClick } = this.props

    if (typeof className === 'string') {
      const key = className
      className = {}
      className[key] = true
    }

    if (slideId) {
      onClick = function() {
        window.location.replace(`#/${slideId}`)
      }
    }

    className['usa-button-disabled'] = disabled
    className.disabled = disabled

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
  onClick: PropTypes.func,
  slideId: PropTypes.string,
  type: PropTypes.string
}

Button.defaultProps = {
  className: {},
  disabled: false,
  type: 'button'
}

export default Button
