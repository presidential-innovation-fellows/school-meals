import React, { Component, PropTypes } from 'react'
import Alert from '../Alert'
import Button from '../Button'
import Slide from '../Slide'
import IncomeTypeDefaultText from './IncomeTypeDefaultText'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { incomeTypeIsValid, informalName } from '../../../helpers'
import { FormattedMessage } from 'react-intl'

@observer
class IncomeType extends Component {
  @computed get allSourcesFalse() {
    const { person, name } = this.props
    const sources = person.incomeTypes[name].sources

    for (const key in sources) {
      if (sources[key].has !== false) {
        return false
      }
    }

    return true
  }

  render() {
    const { person, name, showDefaultText, showMilitaryCaveat } = this.props
    const incomeType = person.incomeTypes[name]
    const defaultTextProps = { person, showMilitaryCaveat }
    const personName = informalName(person)
    const missingIncomeTitle =
      <FormattedMessage
          id="app.slides.incomeType.missingIncomeTitle"
          description="Missing Income alert title"
          defaultMessage="Missing Income"
      />

    return (
      <Slide
          header={personName}
          id={`income/${person.id}/${name}`}
          helpArticle={`${name}-income`}
          nextDisabled={!incomeTypeIsValid(incomeType)}
      >
        {showDefaultText && <IncomeTypeDefaultText {...defaultTextProps} />}
        {this.props.children}

        { this.allSourcesFalse &&
          <Alert heading={missingIncomeTitle}>
            <FormattedMessage
                id="app.slides.incomeType.missingIncome"
                description="Missing Income Alert"
                defaultMessage="On a previous page, you indicated that {adult} receives income from one of the above sources. Please enter this income above or correct your previous answer."
                values={{
                  adult: <strong>{personName}</strong>
                }}
            />
            <br />
            <Button
                slideId={`income/${person.id}`}
                className="usa-button-gray"
            >
              <FormattedMessage
                  id="app.slides.incomeType.changeAnswer"
                  description="Change previous answer"
                  defaultMessage="Change previous answer"
              />
            </Button>
          </Alert>
        }
      </Slide>
    )
  }
}

IncomeType.propTypes = {
  person: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  showDefaultText: PropTypes.bool,
  showMilitaryCaveat: PropTypes.bool
}

IncomeType.defaultProps = {
  showDefaultText: true,
  showMilitaryCaveat: false
}

export default IncomeType
