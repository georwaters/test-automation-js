import { Page } from './Page'
import { Button, TextField, Element } from '../core/ui'
import { getId } from '../helpers/idGenerator'

const emailTextField = new TextField("//input[@id='user-identifier-input']", "Email text field")
const passwordTextField = new TextField("//input[@id='password-input']", "Password text field")
const countryDropdown = new Element("//select[@id='location-select']", "Country drop down")
const usaCountry = new Element("//option[@value='us']", "Usa country")
const submitButton = new Button("//button[@id='submit-button']", "Submit button")

export class RegisterDetailsPage extends Page {

    fulfillFields = (email, password) => {
        emailTextField.setValue(email);
        passwordTextField.setValue(password);
        countryDropdown.click();
        usaCountry.click();
        submitButton.click();
    }

    getUniqueUserId = () => {
        const id = getId();
        const email = `test-user-${id}@gmail.com`
        return email;
    }

    waitForSubmitButtonToBeVisible = () => submitButton.waitUntilVisible();

}
