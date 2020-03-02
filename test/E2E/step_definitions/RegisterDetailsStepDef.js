import { RegisterDetailsPage } from '../pageObjects'
import { When, Then } from 'cucumber'
import { getCurrentUrl } from '../core/browser'

const simpleUser = require('../helpers/data/user-data.json')

const correctUser = {
  username: RegisterDetailsPage.getUniqueUserId(),
  password: simpleUser.data.password,
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
