import { MainPage } from '../pageObjects'
import { Then } from 'cucumber'
import { getCurrentUrl } from '../core/browser'

Then(/^I am on the MAIN Page$/, () => {
  const expectedUrl = "https://www.bbc.com/";

  MainPage.waitForNavigationDivToBeVisible();
  const url = getCurrentUrl();
  expect(url).to.equal(expectedUrl);
})
