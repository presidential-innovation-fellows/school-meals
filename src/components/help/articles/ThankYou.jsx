import React, { Component } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import Topic from '../Topic'
import { help } from './HelpText'

// F5, F10, F12-13, F43

export default class All extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
          <Topic title={help.applyLaterTitle} body={help.applyLaterBody} />
          <Topic title={help.otherProgramsTitle} body={help.otherProgramsBody} />
          <Topic title={help.publicChargeTitle} body={help.publicChargeBody} />
          <Topic title={help.checkedTitle} body={help.checkedBody} />
          <Topic title={help.disagreeTitle} body={help.disagreeBody} />
        </ArticleFaqSection>
      </Article>
    )
  }
}
