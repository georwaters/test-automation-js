import { Page } from './Page'
import { Button, TextField } from '../core/ui'

const dayTextField = new TextField("//input[@id='day-input']","")
const monthTextField = new TextField("//input[@id='month-input']","")
const yearTextField = new TextField("//input[@id='year-input']","")
const continueButton = new Button("//button[@id='submit-button']","")

export class RegisterAgePage extends Page {
  inputBirthDate = (day, month, year) => {
    dayTextField.setValue(day);
    monthTextField.setValue(month);
    yearTextField.setValue(year);
  }
  clickContinueButton = () => continueButton.click();

  waitForContinueButtonToBeVisible = () => continueButton.waitUntilVisible();

}
