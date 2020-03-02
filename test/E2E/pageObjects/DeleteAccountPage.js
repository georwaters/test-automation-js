import { Page } from './Page'
import { Button, TextField } from '../core/ui'

const passwordTextField = new TextField("//input[@id='password-input']", "Password text field")
const submitButton = new Button("//button[@class='button']", "Submit button")

export class DeleteAccountPage extends Page {
  deleteAccount = (password) => {
    passwordTextField.setValue(password)
    submitButton.click()
  }
}