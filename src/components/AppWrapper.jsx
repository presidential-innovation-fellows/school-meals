import React, { Component } from 'react'
import { observer } from 'mobx-react'
import jQuery from 'jquery'
import LocaleData from '../stores/LocaleData'
import App from './App'

const localeData = new LocaleData()

// Some things occasionally rely on these references (unfortunate shortcut).
window.localeData = localeData

@observer
class AppWrapper extends Component {
  componentDidMount() {
    jQuery('#root').on('click', '.slide-content > footer', (e) => {
      // False if an enabled button is clicked, else true.
      if (e.currentTarget === e.target) {
        const $slide = jQuery(e.target).closest('.slide')
        const $inputs = $slide.find('input:required').filter(function() {
          return !jQuery(this).val()
        })

        $slide.find('.required-text').removeClass('hidden')

        $inputs.each(function() {
          jQuery(this).closest('.input-field').addClass('usa-input-error')
        })
      }
    })
  }

  render() {
    return (
      // We pass `locale` as a literal for comparison by App.componentDidUpdate.
      <App localeData={localeData} locale={localeData.code} />
    )
  }
}

export default AppWrapper
