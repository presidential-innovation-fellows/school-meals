import { action, observable } from 'mobx'
import request from 'superagent'

export default class LocaleData {
  @observable code = 'en'
  @observable translations = {}

  @action setLocale(code) {
    code = code.split('-')[0].toLowerCase()
    console.debug('Setting new locale:', code)

    // English is the default -- there is no translation file
    if (code === 'en') {
      this.translations = {}
      this.code = code
      return
    }

    request.get(`./translations/${code}.json`, (err, res) => {
      if (err) {
        console.error(err)
      } else {
        this.translations = res.body
        this.code = code
        console.debug('Translation loaded for locale code:', code, this.translations)
      }
    })
  }

  constructor() {
    this.setLocale(navigator.language ||
                   navigator.browserLanguage ||
                   'en')
  }
}
