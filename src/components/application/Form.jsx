import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Form extends Component {
  render() {
    return (
      <form className="usa-form">
        {this.props.children}
      </form>
    )
  }
}

export default Form
