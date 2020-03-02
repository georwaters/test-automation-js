import { RegisterDetailsPage } from '../pageObjects'
import { When, Then } from 'cucumber'
import { getCurrentUrl } from '../core/browser'

const correctUser = {
  username: RegisterDetailsPage.getUniqueUserId(),
  password: 'Testpassword1234!',
}

When(/^I input Email address and Password and submit$/, () => {
  RegisterDetailsPage.spinnerNotVisible();
  RegisterDetailsPage.fulfillFields(correctUser.username, correctUser.password);
})

Then(/^I am on the DETAILS Page$/, () => {
  RegisterDetailsPage.waitForSubmitButtonToBeVisible();
  const url = getCurrentUrl();
  expect(url).to.have.string("register/details");
})