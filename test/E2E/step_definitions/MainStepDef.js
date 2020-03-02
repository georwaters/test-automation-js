import { MainPage } from '../pageObjects'
import { Given, Then, When } from 'cucumber'
import { getCurrentUrl, waitFor } from '../core/browser'

Then(/^I am on the MAIN Page$/, () => {
  MainPage.waitForNavigationDivToBeVisible();
  const url = getCurrentUrl();
  expect(url).to.equal("https://www.bbc.com/");
})