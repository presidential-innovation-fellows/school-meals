import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import Form from '../Form'
import Fieldset from '../Fieldset'
import InputField from '../InputField'
import { observer } from 'mobx-react'

@observer
class Contact extends Component {
  constructor (props) {
    super(props)
    this.onUsStateChange = this.onUsStateChange.bind(this)
  }

  onUsStateChange(event) {
    this.props.contact.state = event.target.value
  }

  render() {
    const { contact } = this.props

    return (
      <Slide header="Contact Info" id="contact" showHelp={false} beginsSection>
        <p className="usa-font-lead">Please enter your contact information so that we can reach you in case there are any issues with your application.</p>

        <Form large={true}>
          <InputField
              name="phone"
              label="Phone number"
              type="tel"
              additional="Optional"
              object={contact}
          />

          <InputField
              name="email"
              label="Email"
              type="email"
              additional="Optional"
              object={contact}
          />

          <Fieldset legend="Address">
            <InputField
                name="address1"
                label="Street address 1"
                additional="If available"
                object={contact}
            />

            <InputField
                name="address2"
                label="Street address 2"
                additional="Optional"
                object={contact}
            />

            <div>
              <InputField
                  name="city"
                  label="City"
                  size="medium"
                  object={contact}
                  grid
              />

              <div className="usa-input-grid usa-input-grid-small">
                <label for="state">State</label>
                <select id="state" name="state" value={contact.state}
                        onChange={this.onUsStateChange}>
                  <option value=""></option>
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
                </select>
              </div>
            </div>

            <InputField
                name="zip"
                label="ZIP"
                size="medium"
                object={contact}
            />
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
