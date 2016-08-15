import { action, observable } from 'mobx'

export default class HelpData {
  @observable isVisible = false
  @observable article = ''

  @action showArticle(article) {
    this.article = article

    // unfortunate to manipulate the DOM in here, but quick and easy
    const helpContent = document.getElementById('help-content');
    helpContent.scrollTop = 0;

    this.isVisible = true
  }
}
