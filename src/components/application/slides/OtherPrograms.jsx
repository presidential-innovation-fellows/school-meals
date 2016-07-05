import React, { Component } from 'react'
import Slide from '../Slide'
import { observer } from 'mobx-react'

@observer
class OtherPrograms extends Component {
  render() {
    const { students } = this.props

    return (
      <Slide header="Other Programs">

        <p>No problem! There are other ways to qualify.</p>

        <p>If <strong>{students.informalList}</strong> {students.length === 1 ? 'is a foster child' : 'are forster children'} or qualify as homeless, migrant or runaway, then they may be eligible for school meal benefits.</p>

      </Slide>
    )
  }
}

export default OtherPrograms
