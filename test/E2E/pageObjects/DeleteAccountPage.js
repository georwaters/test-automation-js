import { Page } from './Page'
import { Button, TextField, Element } from '../core/ui'
import { waitFor } from '../core/browser'

const passwordTextField = new TextField("//input[@id='password-input']", "")
const submitButton = new Button("//button[@class='button']", "")

export class DeleteAccountPage extends Page {
  deleteAccount = (password) => {
    passwordTextField.setValue(password)
    submitButton.click()
  }
}