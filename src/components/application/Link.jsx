import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Link extends Component {
  render() {
    return <a href={`#/${this.props.id}`}>{this.props.children}</a>
  }
}

Link.propTypes = {
  id: PropTypes.string.isRequired
}

export default Link
