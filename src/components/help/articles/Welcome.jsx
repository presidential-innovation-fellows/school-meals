import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { toSentenceSerial } from 'underscore.string'
import { assistanceProgramsVar, organization } from '../../../config'
import { help } from './HelpText'
import Standard from '../TopicStandard'
import PaperApp from '../topics/PaperApp'

export default class Welcome extends Component {
  render() {
//    const assistanceProgramList = assistanceProgramsVar.snap.fullname +' (' assistanceProgramsVar.snap.accronym + ') ' + assistanceProgramsVar.tanf.fullname + ' (' + assistanceProgramsVar.tanf.accronym + ') ' + assistanceProgramsVar.fdpir.fullname + ' (' + assistanceProgramsVar.fdpir.accronym +') '

//F1-F12, F43
    return (
      <Article>
        <PaperApp />
        <Standard title={help.newAppTitle} body={help.newAppBody} />
        <Standard title={help.childAppTitle} body={help.childAppBody} />
        <Standard title={help.letterTitle} body={help.letterBody} />
        <Standard title={help.applyLaterTitle} body={help.applyLaterBody} />
        <Standard title={help.localProgramTitle} body={help.localProgramBody} />
        <Standard title={help.fosterQualifyTitle} body={help.fosterQualifyBody} />
        <Standard title={help.wicTitle} body={help.wicBody} />
        <Standard title={help.headStartTitle} body={help.headStartBody} />
        <Standard title={help.otherProgramsTitle} body={help.otherProgramsBody} />
        <Standard title={help.usCitizenTitle} body={help.usCitizenBody} />
        <Standard title={help.publicChargeTitle} body={help.publicChargeBody} />
        <Standard title={help.newAppTitle} body={help.newAppBody} />
        <Standard title={help.disagreeTitle} body={help.disagreeBody} />
      </Article>
    )
  }
}
