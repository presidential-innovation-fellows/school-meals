import { action, observable } from 'mobx'

export default class HelpData {
  @observable isVisible = false
  @observable article = ''

  @action showArticle(article) {
    this.article = article
    this.isVisible = true
  }
}
