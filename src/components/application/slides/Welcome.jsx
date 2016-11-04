import React from 'react'
//import FormattedMessage from '../FormattedMessage'
import { IntlProvider, FormattedMessage } from 'react-intl'
import Slide from '../Slide'
import { organization } from '../../../config'
import { observer } from 'mobx-react'

@observer
class Welcome extends React.Component {
  render() {
    // pulled out to be localized
    const headerText = 'Welcome!'
    const nextButtonText = 'Get Started'

    return (
      <Slide header={headerText} id="welcome" showBack={false} nextText={nextButtonText} beginsSection>

        <p className="usa-font-lead">
<IntlProvider>
          <FormattedMessage
              id="app.slides.welcome.intro"
              description="Introductory paragraph."
              defaultMessage="This is the {organizationName} electronic application for free and reduced priced meals for the {usda}&rsquo;s National School Lunch &amp; School Breakfast Programs."
              values={{
                organizationName: organization.name,
                usda: <abbr title="United States Department of Agriculture">USDA</abbr>
              }}
          />
</IntlProvider>
        </p>

        <p>
          <FormattedMessage
              id="app.slides.welcome.onlineInstructions"
              description="Instructions on how to apply online."
              defaultMessage="This interactive application will guide you through the application process. When you are ready to apply, click the ‘{buttonText}’ button below to begin."
              values={{
                buttonText: nextButtonText
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.welcome.paperInstructions"
              description="Instructions on how to apply with a paper application."
              defaultMessage="If you would like to apply using the {link}, you can print and complete it and then return it to us at {address}."
              values={{
                address: organization.paperApplication.address,
                link:
                     <a href={organization.paperApplication.url} target="_blank">
                       <FormattedMessage
                         id="app.slides.welcome.paperApplication"
                         description="Phrase"
                         defaultMessage="paper application"
                       />
                     </a>
              }}
          />
        </p>

      </Slide>
    )
  }
}

export default Welcome
