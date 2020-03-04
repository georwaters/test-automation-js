import { Page } from './Page'
import { Button, TextField } from '../core/ui'

const dayTextField = new TextField("//input[@id='day-input']","Day text field")
const monthTextField = new TextField("//input[@id='month-input']","Month text field")
const yearTextField = new TextField("//input[@id='year-input']","Year text field")
const continueButton = new Button("//button[@id='submit-button']","Continue button")

export class RegisterAgePage extends Page {
  inputBirthDate = (day, month, year) => {
    this.spinnerNotVisible();
    dayTextField.setValue(day);
    monthTextField.setValue(month);
    yearTextField.setValue(year);
  }
  clickContinueButton = () => continueButton.click();

  waitForContinueButtonToBeVisible = () => continueButton.waitUntilVisible();

}
