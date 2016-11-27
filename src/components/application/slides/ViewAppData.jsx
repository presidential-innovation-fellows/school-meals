import React from 'react'
import { observer } from 'mobx-react'
import Slide from '../Slide'
import { FormattedMessage } from 'react-intl'

@observer
class ViewAppData extends React.Component {
  render() {

    return (
      <Slide header="View Application Data!" id="viewappdata" showBack={false} showNext={false} >
        <p className="slide-content">
          <FormattedMessage
              id="app.slides.viewAppData.intro"
              description="Intro text"
              defaultMessage="This is a special {appData} view for developers. As you fill out the application, you can come back to this page to see how the dataset has changed."
              values={{
                appData: <strong>
                  <FormattedMessage
                      id="app.slides.viewAppData.applicationData"
                      description="applicationData"
                      defaultMessage="applicationData"
                  />
                </strong>
              }}
          />
        </p>
        <strong>
          <FormattedMessage
              id="app.slides.viewAppData.appDataSet"
              description="Application Data Set"
              defaultMessage="Application Data Set:"
          />
        </strong>
        <plaintext>
          {JSON.stringify(this.props.applicationData, null, 2)}
        </plaintext>

      </Slide>
    )
  }
}

export default ViewAppData
