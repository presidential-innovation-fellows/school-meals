import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Topic extends Component {
  render() {
    const { title } = this.props

    return (
      <div className="help-topic">
        {!!title && <p className="help-title">{title}</p>}
        {this.props.children}
      </div>
    )
  }
}

Topic.propTypes = {
  title: PropTypes.string
}

export default Topic
