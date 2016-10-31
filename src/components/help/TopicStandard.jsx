import React, { Component, PropTypes } from 'react'
import Topic from './Topic'
import { observer } from 'mobx-react'

export default class Standard extends Component {
  render() {
    const { title, body, } = this.props

    return (
      <Topic title={this.props.title}>
        <p>
          {this.props.body}
        </p>
      </Topic>
    )
  }
}

Standard.PropTypes = {
	body: PropTypes.any,
  title: PropTypes.any,
}