import React from 'react'
import { observer } from 'mobx-react'
import Slide from '../Slide'
import { organization } from '../../../config'
import { jsonMarkup } from '../../../helpers'

@observer
class ViewAppData extends React.Component {
  render() {

    return (
      <Slide header="View Application Data!" id="viewappdata" showBack={false} showNext={false} >
        <p className="slide-content">
          This is a special <strong>applicationData</strong> view for developers. As you fill out the application, you can come back to this
          page to see how the dataset has changed. If you want to pre-load applicationData with test values, just update /src/debug.js
          and set DEBUG = true in /src/stores/applicationData.jsx.
        </p>
        <strong>Application Data Set:</strong>
        <plaintext>
          {JSON.stringify(this.props.applicationData,undefined, 2)}
        </plaintext>

      </Slide>
    )
  }
}

export default ViewAppData
