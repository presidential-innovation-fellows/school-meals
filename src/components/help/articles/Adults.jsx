import React, { Component } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import Topic from '../Topic'
import { help } from './HelpText'
import Household from '../topics/Household'

// F15, F40, F17

export default class Adults extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
          <Household />
          <Topic title={help.noIncomeTitle} body={help.noIncomeBody} />
          <Topic title={help.deployedTitle} body={help.deployedBody} />
        </ArticleFaqSection>
      </Article>
    )
  }
}
