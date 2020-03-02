import { curry } from 'lodash'
import { BasePage } from '../core/ui/BasePage'
import { closeFrame, goBack, openFrame, refreshPage } from '../core/browser'
import { Element } from '../core/ui'


const loaderSpinner = new Element("//div[contains(@class,'spinner')]","")

export class Page extends BasePage {
  identifier

  withFrame = curry((id, action) => {
    let result

    openFrame(id)
    result = action()
    closeFrame()

    return result
  })

  acceptPopUp() {
    browser.acceptAlert()
  }

  dismissPopUp() {
    browser.dismissAlert()
  }

  getPopUpText() {
    return browser.getAlertText()
  }

  isPopUpVisible() {
    return !!this.getPopUpText().length
  }

  backToPreviousPage() {
    goBack()
  }

  refreshPage() {
    refreshPage()
  }

  spinnerNotVisible = () => {
    loaderSpinner.waitUntilVisible(30000, true)
  }
}
