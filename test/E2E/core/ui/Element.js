import { info } from '../logger'

export class Element {
  DEFAULT_TIMEOUT = 30000

  constructor(selector, name = 'Element') {
    this.selector = selector
    this.name = name
  }

  get element() {
    return $(this.selector)
  }

  get elements() {
    return $$(this.selector)
  }

  getNestedElement(selector) {
    return this.element.$(selector)
  }

  getAttribute(name) {
    info(`Going to get ${name} attribute for ${this.name}`)
    return this.element.getAttribute(name)
  }

  getText() {
    info(`Going to get text for ${this.name}`)
    this.waitUntilVisible()
    return this.element.getText()
  }

  getValue() {
    info(`Going to get value for ${this.name}`)
    return this.element.isExisting() ? this.element.getValue() : null
  }

  waitUntilVisible(timeout = this.DEFAULT_TIMEOUT, reverse = false) {
    this.element.waitForDisplayed(timeout, reverse, `${this.name} is not displayed`)
  }

  waitUntilEnabled(timeout = this.DEFAULT_TIMEOUT, reverse = false) {
    this.element.waitForEnabled(timeout, reverse, `${this.name} is not enabled`)
  }

  waitForExisting(timeout = this.DEFAULT_TIMEOUT, reverse = false) {
    this.element.waitForExist(timeout, reverse, `${this.name} is not enabled`)
  }

  moveTo(x, y) {
    info(`Going to move ${this.name} to x: ${x} y: ${y}`)
    const intX = parseInt(x, 10) || undefined
    const intY = parseInt(y, 10) || undefined
    browser.moveTo(this.element, intX, intY)
  }

  click() {
    info(`Going to click ${this.name}`)
    this.waitUntilEnabled()
    this.waitUntilVisible(30000)
    this.element.click()
  }

  sendKey(keyname) {
    info(`Going to send "${keyname}" key to ${this.name}`)
    this.element.keys(keyname)
  }

  isExisting() {
    return this.element.isExisting()
  }

  isDisplayed() {
    return this.element.isDisplayed()
  }
}
