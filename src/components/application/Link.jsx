import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Link extends Component {
  constructor(props, context) {
    super(props, context);
    this.id = props.id
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault()
    this.context.navigationData.jumpTo(this.id)
  }

  render() {
    return <a
        href={`#/${this.id}`}
        onClick={this.handleClick}
           >{this.props.children}</a>
  }
}

Link.propTypes = {
  id: PropTypes.string.isRequired
}

Link.contextTypes = {
  navigationData: PropTypes.shape({
    jumpTo: PropTypes.func.isRequired
  }).isRequired
}

export default Link
