import { Page } from './Page'
import { Button, TextField, Element } from '../core/ui'

const noThanksCheckBox = new Element("(//label[@class='button__radio-label'])[2]","")
const continueButton = new Button("//button[@id='submit-button']", "")

export class RegisterThanksPage extends Page {
  clickNoThanksButton = () => noThanksCheckBox.click()
  clickContinueButton = () => continueButton.click()
  waitForContinueButtonToBeVisible = () => continueButton.waitUntilVisible();
}
