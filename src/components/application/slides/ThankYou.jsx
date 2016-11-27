import React, { Component } from 'react'
import Slide from '../Slide'
import Alert from '../Alert'
import download from 'downloadjs'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class ThankYou extends Component {
  constructor(props) {
    super(props)
    this.downloadData = this.downloadData.bind(this)
  }

  downloadData() {
    const { applicationData } = this.props
    const stringData = JSON.stringify(applicationData.cleaned, null, 2)

    download(stringData, 'nslp-data.json', 'text/plain');
  }

  render() {
    const headerText =
      <FormattedMessage
          id="app.slides.thankYou.header"
          description="Text for the header of the slide."
          defaultMessage="Thank you for applying for school meal benefits!"
      />

    const alertHeading =
      <FormattedMessage
          id="app.slides.thankYou.submitted"
          description="application has been submitted"
          defaultMessage="Your application has been submitted."
      />

    const warningHeading =
      <FormattedMessage
          id="app.slides.thankYou.cautionHeading"
          description="Warning message heading"
          defaultMessage="Caution"
      />

    const nextText =
      <FormattedMessage
          id="app.slides.thankYou.download"
          description="Button to download data"
          defaultMessage="Download Data"
      />

    return (
      <Slide
          header={headerText} id="thank-you"
          showBack={false} nextText={nextText} handleNext={this.downloadData}
          beginsSection
      >

        <Alert heading={alertHeading} type="success">
          <FormattedMessage
              id="app.slides.thankYou.nextSteps"
              description="Indication of what happens next."
              defaultMessage="You will hear from us soon with your certification decision!"
          />
        </Alert>

        <Alert heading={warningHeading} type="error">
          <strong>
            <FormattedMessage
                id="app.slides.thankYou.caution"
                description="Warning message"
                defaultMessage="NO DATA HAS BEEN SAVED. THIS IS NOT A REAL APPLICATION FOR SCHOOL MEAL BENEFITS. THIS IS A MODEL APPLICATION DEVELOPED BY USDA TO DEMONSTRATE THE POTENTIAL FUNCTIONALITY OF A SCHOOL DISTRICT'S APPLICATION. CONTACT YOUR CHILD'S SCHOOL TO FIND OUT WHERE YOU CAN ACCESS THEIR APPLICATION FOR SCHOOL MEAL BENEFITS."
            />
          </strong>
        </Alert>
        <br />
      </Slide>
    )
  }
}

export default ThankYou
