import { MainPage } from '../pageObjects'
import { Then } from 'cucumber'
import { getCurrentUrl } from '../core/browser'

const expectedUrl = "https://www.bbc.com/";

Then(/^I am on the MAIN Page$/, () => {
  MainPage.waitForMainPageElementToLoad();
  const url = getCurrentUrl();
  expect(url).to.equal(expectedUrl);
})
