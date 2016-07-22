import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Answer extends Component {
  render() {
    return (
      <div className="help-answer">
        {this.props.children}
      </div>
    )
  }
}

export default Answer
