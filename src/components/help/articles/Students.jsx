import React, { Component } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import Topic from '../Topic'
import { help } from './HelpText'
import Household from '../topics/Household'

export default class Students extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
          <Topic title={help.childAppTitle} body={help.childAppBody} />
          <Topic title={help.headStartTitle} body={help.headStartBody} />
          <Household />
          <Topic title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
        </ArticleFaqSection>
      </Article>
    )
  }
}
