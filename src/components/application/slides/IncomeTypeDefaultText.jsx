import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'
import { tooltiptext } from '../../Tooltiptext'
import Tooltip from '../Tooltip'
import { FormattedMessage } from 'react-intl'

@observer
class IncomeTypeDefaultText extends Component {
  render() {
    const { person, showMilitaryCaveat } = this.props

    return (
      <div>
        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.IncomeTypeDefaultText.intro"
              description="Introductory paragraph."
              defaultMessage="Does {person} have income from the following sources{militaryCaveat}?"
              values={{
                person: <strong>{informalName(person)}</strong>,
                militaryCaveat: !!showMilitaryCaveat &&
                <FormattedMessage
                    id="app.slides.IncomeTypeDefaultText.notIncludingEarnings"
                    description="not including earnings"
                    defaultMessage=", not including earnings from the military that were already reported"
                />
              }}
          />
        </p>

        <p>
          <FormattedMessage
              id="app.slides.IncomeTypeDefaultText.note"
              description="note: remember to report..."
              defaultMessage="NOTE: Remember to report {tooltip}, {tooltip2} income."
              values={{
                tooltip:
                  <Tooltip text={tooltiptext.currentAdult}>
                    <FormattedMessage
                        id="app.slides.IncomeTypeDefaultText.currentAdult"
                        description="current"
                        defaultMessage="current"
                    />
                  </Tooltip>,
                tooltip2:
                  <Tooltip text={tooltiptext.gross}>
                    <FormattedMessage
                        id="app.slides.IncomeTypeDefaultText.gross"
                        description="gross"
                        defaultMessage="gross"
                    />
                  </Tooltip>
              }}
          />
        </p>
      </div>
    )
  }
}

IncomeTypeDefaultText.propTypes = {
  person: PropTypes.object.isRequired,
  showMilitaryCaveat: PropTypes.bool
}

IncomeTypeDefaultText.defaultProps = {
  showMilitaryCaveat: false
}

export default IncomeTypeDefaultText
