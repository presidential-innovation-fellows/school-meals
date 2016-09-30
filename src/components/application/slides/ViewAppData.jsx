import React from 'react'
import { observer } from 'mobx-react'
import Slide from '../Slide'
import { organization } from '../../../config'
import { jsonMarkup } from '../../../helpers'

@observer
class ViewAppData extends React.Component {
  render() {

    //const appData = this.props.applicationData

    //const html = JSON.stringify(this.props.applicationData,undefined, 2)



    return (
      <Slide header="View Application Data!" id="viewappdata" showBack={false} showNext={false} >
        <p className="slide-content">
          This is a special application data set view for developers. As you fill out the application, you can come back to this
          page to see how the dataset has changed.
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
