import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import Household from '../topics/Household'
import SharedCustody from '../topics/SharedCustody'
import NoIncome from '../topics/NoIncome'

export default class OtherChildren extends Component {
  render() {
    return (
      <Article>
        <Household />
        <SharedCustody />
        <NoIncome />
      </Article>
    )
  }
}
