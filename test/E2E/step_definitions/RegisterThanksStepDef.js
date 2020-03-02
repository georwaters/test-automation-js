import { RegisterThanksPage } from '../pageObjects'
import { Given, Then, When } from 'cucumber'
import { getCurrentUrl } from '../core/browser'

Then(/^I am on the THANKS Page$/, () => {
  RegisterThanksPage.waitForContinueButtonToBeVisible();
  const url = getCurrentUrl();
  expect(url).to.have.string("register/thanks");
})

Then(/^I click no thanks and submit$/, () => {
  RegisterThanksPage.clickNoThanksButton();
  RegisterThanksPage.clickContinueButton();
})