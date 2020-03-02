import { AccountDeletedPage } from '../pageObjects'
import { Then } from 'cucumber'

Then(/^I am on the DELETED account Page$/, () => {
  const title = AccountDeletedPage.getPageTitle();
  expect(title).to.include("You've deleted your account. Sorry to see you go.");
})  
