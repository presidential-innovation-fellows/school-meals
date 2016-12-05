import React, { Component, PropTypes } from 'react'
import Select from '../Select'
import Slide from '../Slide'
import Form from '../Form'
import Fieldset from '../Fieldset'
import InputField from '../InputField'
import { observer } from 'mobx-react'
import { FormattedMessage } from 'react-intl'

@observer
class Contact extends Component {
  constructor(props) {
    super(props)
    this.handleUsStateChange = this.handleUsStateChange.bind(this)
  }

  handleUsStateChange(event) {
    this.props.contact.state = event.target.value
  }

  render() {
    const { contact } = this.props

    const headerText =
      <FormattedMessage
          id="app.slides.contact.header"
          description="Text for the header of the slide."
          defaultMessage="Contact Info"
      />

    return (
      <Slide header={headerText} id="contact" beginsSection>
        <p className="usa-font-lead">
          <FormattedMessage
              id="app.slides.contact.intro"
              description="Introductory paragraph."
              defaultMessage="Please enter your contact information so that we can reach you in case there are any issues with your application. This information is optional, but we strongly encourage you to provide it."
          />
        </p>

        <Form large>
          <InputField
              name="phone"
              type="tel"
              pattern="( \d{3}- | \(\d{3}\) )?\d{3}-\d{4}"
              object={contact}
          >
            <FormattedMessage
                id="app.slides.contact.phone.label"
                description="Field label."
                defaultMessage="Phone number"
            />
          </InputField>

          <InputField
              name="email"
              type="email"
              pattern="^\S+@\S+\.\S+$"
              object={contact}
          >
            <FormattedMessage
                id="app.slides.contact.email.label"
                description="Field label."
                defaultMessage="Email"
            />
          </InputField>

          <Fieldset legend="Address">
            <InputField
                name="address1"
                object={contact}
            >
              <FormattedMessage
                  id="app.slides.contact.address1.label"
                  description="Field label."
                  defaultMessage="Street address 1"
              />
            </InputField>

            <InputField
                name="address2"
                object={contact}
            >
              <FormattedMessage
                  id="app.slides.contact.address2.label"
                  description="Field label."
                  defaultMessage="Street address 2"
              />
            </InputField>

            <div>
              <InputField
                  name="city"
                  size="medium"
                  object={contact}
                  grid
              >
                <FormattedMessage
                    id="app.slides.contact.city.label"
                    description="Field label."
                    defaultMessage="City"
                />
              </InputField>

              <div className="usa-input-grid usa-input-grid-small">
                <label htmlFor="state">
                  <FormattedMessage
                      id="app.slides.contact.state.label"
                      description="Field label."
                      defaultMessage="State"
                  />
                </label>
                <Select
                    id="state" name="state" value={contact.state}
                    onChange={this.handleUsStateChange}
                >
                  <option value="" />
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Select>
              </div>
            </div>

            <InputField
                name="zip"
                size="medium"
                object={contact}
            >
              <FormattedMessage
                  id="app.slides.contact.zip.label"
                  description="Field label."
                  defaultMessage="ZIP"
              />
            </InputField>
          </Fieldset>
        </Form>
      </Slide>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
    address1: PropTypes.string,
    address2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string
  })
}

export default Contact
