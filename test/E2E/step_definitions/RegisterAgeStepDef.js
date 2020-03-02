import { RegisterAgePage } from '../pageObjects'
import { Given, Then, When } from 'cucumber'
import { getCurrentUrl, waitFor } from '../core/browser'

When(/^I input and submit birthdate: ([^"]*)$/, (date) => {
  let res = date.split("/");
  let day = res[0];
  let month = res[1];
  let year = res[2];
  RegisterAgePage.inputBirthDate(day, month, year);
  RegisterAgePage.clickContinueButton();
})


Then(/^I am on the AGE Page$/, () => {
  RegisterAgePage.waitForContinueButtonToBeVisible();
  const url = getCurrentUrl();
  expect(url).to.have.string("register/details/age");
})