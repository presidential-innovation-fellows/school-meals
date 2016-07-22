import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Question extends Component {
  render() {
    return (
      <p className="help-question">
        {this.props.children}
      </p>
    )
  }
}

export default Question
