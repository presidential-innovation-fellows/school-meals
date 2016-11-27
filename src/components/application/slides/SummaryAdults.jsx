import React, { Component, PropTypes } from 'react'
import SummaryPersonCollection from './SummaryPersonCollection'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class SummaryAdults extends Component {
  render() {
    const { applicationData } = this.props
    const id = applicationData.showHousehold ? 'adults' : 'attestation'

    return (
      <SummaryPersonCollection
          id={id}
          collection={applicationData.adults}
          showIncomes={applicationData.showHousehold}
      >
        <FormattedMessage
            id="app.slides.summary.adults"
            description="Adults"
            defaultMessage="Adults"
        />
      </SummaryPersonCollection>
    )
  }
}

SummaryAdults.propTypes = {
  applicationData: PropTypes.shape({
    adults: PropTypes.object.isRequired,
    showHousehold: PropTypes.bool.isRequired
  }).isRequired
}

export default SummaryAdults
