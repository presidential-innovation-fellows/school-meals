import React, { Component } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import Topic from '../Topic'
import { help } from './HelpText'

// F42

export default class All extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
          <Topic title={help.contactTitle} body={help.contactBody} />
        </ArticleFaqSection>
      </Article>
    )
  }
}
