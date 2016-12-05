import React, { Component } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import Topic from '../Topic'
import Household from '../topics/Household'
import { help } from './HelpText'

export default class AssistancePrograms extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
          <Topic title={help.letterTitle} body={help.letterBody} />
          <Topic title={help.localProgramTitle} body={help.localProgramBody} />
          <Topic title={help.wicTitle} body={help.wicBody} />
          <Topic title={help.otherProgramsTitle} body={help.otherProgramsBody} />
          <Household />
        </ArticleFaqSection>
      </Article>
    )
  }
}
