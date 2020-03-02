import { Page } from './Page'
import { Button, Element } from '../core/ui'

const noThanksCheckBox = new Element("(//label[@class='button__radio-label'])[2]","No thanks check box")
const continueButton = new Button("//button[@id='submit-button']", "Continue button")

export class RegisterThanksPage extends Page {
  clickNoThanksButton = () => noThanksCheckBox.click()
  clickContinueButton = () => continueButton.click()
  waitForContinueButtonToBeVisible = () => continueButton.waitUntilVisible();
}
