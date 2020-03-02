import { RegisterStartPage } from '../pageObjects'
import { Given, Then, When } from 'cucumber'

Given(/^I am on the Registration Page$/, () => {
  const expectedText = 'Let’s start. This account is for someone who is...';
  RegisterStartPage.goTo();
  RegisterStartPage.spinnerNotVisible();
  expect(RegisterStartPage.getTitleText()).to.equal(expectedText);
})

Then(/^I click on 13 or over button$/, () => {
  RegisterStartPage.clickUserIsOverThirteen();
})