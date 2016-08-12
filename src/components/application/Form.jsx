import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'

@observer
class Form extends Component {
  render() {
    const { large } = this.props

    return (
      <form className={`usa-form${large ? '-large' : ''}`}>
        {this.props.children}
      </form>
    )
  }
}

Form.propTypes = {
  large: PropTypes.bool
}

export default Form
