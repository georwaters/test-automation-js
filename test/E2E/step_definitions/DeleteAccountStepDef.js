import { DeleteAccountPage } from '../pageObjects'
import { Given, Then, When } from 'cucumber'
import { getCurrentUrl, waitFor, openUrl, openPath } from '../core/browser'

const password = "Testpassword1234!";

Then(/^I go to delete my account page$/, () => {
  openPath("/account/settings/delete")
})

Then(/^I delete my account$/, () => {
  DeleteAccountPage.deleteAccount(password);
})