import React, { Component } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import Topic from '../Topic'
import { help } from './HelpText'
import PaperApp from '../topics/PaperApp'

export default class Welcome extends Component {
  render() {
    // F1-F12, F43
    return (
      <Article>
        <ArticleFaqSection>
          <PaperApp />
          <Topic title={help.newAppTitle} body={help.newAppBody} />
          <Topic title={help.childAppTitle} body={help.childAppBody} />
          <Topic title={help.letterTitle} body={help.letterBody} />
          <Topic title={help.applyLaterTitle} body={help.applyLaterBody} />
          <Topic title={help.localProgramTitle} body={help.localProgramBody} />
          <Topic title={help.fosterQualifyTitle} body={help.fosterQualifyBody} />
          <Topic title={help.wicTitle} body={help.wicBody} />
          <Topic title={help.headStartTitle} body={help.headStartBody} />
          <Topic title={help.otherProgramsTitle} body={help.otherProgramsBody} />
          <Topic title={help.usCitizenTitle} body={help.usCitizenBody} />
          <Topic title={help.publicChargeTitle} body={help.publicChargeBody} />
          <Topic title={help.disagreeTitle} body={help.disagreeBody} />
        </ArticleFaqSection>
      </Article>
    )
  }
}
