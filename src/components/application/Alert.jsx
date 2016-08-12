import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Alert extends Component {
  render() {
    const { heading, type } = this.props

    return(
      <div className={`usa-alert usa-alert-${type}`}>
        <div className="usa-alert-body">
          {heading && <h3 className="usa-alert-heading">{heading}</h3>}
          <p className="usa-alert-text">
            {this.props.children}
          </p>
        </div>
      </div>
    )
  }
}

Alert.propTypes = {
  heading: PropTypes.string,
  type: PropTypes.string
}

Alert.defaultProps = {
  type: 'warning'
}

export default Alert
