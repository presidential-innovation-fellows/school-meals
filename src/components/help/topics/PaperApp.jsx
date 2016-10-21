import React, { Component, PropTypes } from 'react'
import Topic from '../Topic'

//F1
export default class PaperApp extends Component {
  render() {
    return (
      <Topic title="Can I apply using a paper application?">
        <p>
          Yes. If you would like to apply using the paper application, you can print it from here <a href={organization.paperApplication.url} target="_blank">paper application</a> or contact organization.name (organization.contact.phone / organization.contact.email  / organization.contact.address) to request an application. Then return the completed application to organization.name.
        </p>
      </Topic>
    )
  }
}