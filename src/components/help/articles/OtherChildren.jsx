import React, { Component } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import Topic from '../Topic'
import Household from '../topics/Household'
import { help } from './HelpText'

export default class OtherChildren extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
          <Household />
          <Topic title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
          <Topic title={help.noIncomeTitle} body={help.noIncomeBody} />
        </ArticleFaqSection>
      </Article>
    )
  }
}
