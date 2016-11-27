import { action, observable } from 'mobx'
import request from 'superagent'

export default class LocaleData {
  @observable code = 'en'
  @observable translations = {}

  @action setLocale(localeCode) {
    let code = localeCode
    code = code.split('-')[0].toLowerCase()

    // English is the default -- there is no translation file
    if (code === 'en') {
      this.translations = {}
      this.code = code
      return
    }

    request.get(`./translations/${code}.json`, (err, res) => {
      if (err) {
        alert(err)
      } else {
        this.translations = res.body
        this.code = code
      }
    })
  }

  constructor() {
    this.setLocale(navigator.language ||
                   navigator.browserLanguage ||
                   'en')
  }
}
