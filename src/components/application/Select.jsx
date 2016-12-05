import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Select extends Component {
  render() {
    const { className, reflectSuccessOnValue, ...props } = this.props

    let classNames = className
    if (typeof classNames === 'string') {
      const key = classNames
      classNames = {}
      classNames[key] = true
    }
    classNames['usa-input-success'] = reflectSuccessOnValue && props.value

    return (
      <select className={classnames(classNames)} {...props}>
        {this.props.children}
      </select>
    )
  }
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  reflectSuccessOnValue: PropTypes.bool
}

Select.defaultProps = {
  className: {},
  reflectSuccessOnValue: true
}

export default Select
