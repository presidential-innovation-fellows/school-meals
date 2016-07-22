import { observable } from 'mobx'

export default class HelpData {
  @observable isVisible = false
  @observable article = ''
}
