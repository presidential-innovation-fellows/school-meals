import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'

//F42

export default class All extends Component {
  render() {
    return (
      <Article>
        <Topic title={help.contactTitle} body={help.contactBody} />
      </Article>
    )
  }
}
