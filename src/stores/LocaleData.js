import { action, observable } from 'mobx'
import request from 'superagent'

export default class LocaleData {
  @observable locale = 'en'
  @observable translations = {}
  @observable i = 0

  @action setLocale(locale) {
    const newLocale = locale.split('-')[0].toLowerCase()

    request.get(`./translations/${newLocale}.json`, (err, res) => {
      if (err) {
        alert(err)
      } else {
        this.translations = res.body
        this.locale = newLocale
      }
    })
  }

  constructor() {
    this.setLocale('es' || navigator.language ||
                   navigator.browserLanguage ||
                   'en')
    let self = this
    window.setInterval(() => { self.i++ }, 1000)
  }
}
